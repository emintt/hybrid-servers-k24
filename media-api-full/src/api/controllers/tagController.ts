import {Request, Response, NextFunction} from 'express';
import {
  fetchAllTags,
  postTag,
  fetchTagsByMediaId,
  fetchFilesByTagById,
  deleteTag,
  deleteTagFromMedia,
} from '../models/tagModel';
import CustomError from '../../classes/CustomError';
import {MessageResponse} from '@sharedTypes/MessageTypes';
import {MediaItem, Tag, TagResult, TokenContent} from '@sharedTypes/DBTypes';

// list of tags
const tagListGet = async (
  req: Request,
  res: Response<Tag[]>,
  next: NextFunction
) => {
  try {
    const tags = await fetchAllTags();
    if (tags) {
      res.json(tags);
      return;
    }
    next(new CustomError('No tags found', 404));
  } catch (error) {
    next(error);
  }
};

// list of tags by media item id
const tagListByMediaIdGet = async (
  req: Request<{id: string}>,
  res: Response<TagResult[]>,
  next: NextFunction
) => {
  try {
    const tags = await fetchTagsByMediaId(Number(req.params.id));
    if (tags) {
      res.json(tags);
      return;
    }
    next(new CustomError('No tags found', 404));
  } catch (error) {
    next(error);
  }
};

// Post a new tag
const tagPost = async (
  req: Request<{}, {}, {tag_name: string; media_id: string}>,
  res: Response<MessageResponse>,
  next: NextFunction
) => {
  try {
    const result = await postTag(req.body.tag_name, Number(req.body.media_id));
    if (result) {
      res.json(result);
      return;
    }
    next(new CustomError('Tag not created', 500));
  } catch (error) {
    next(error);
  }
};

const tagFilesByTagGet = async (
  req: Request<{tag_id: string}>,
  res: Response<MediaItem[]>,
  next: NextFunction
) => {
  try {
    const files = await fetchFilesByTagById(Number(req.params.tag_id));
    if (files) {
      res.json(files);
      return;
    }
    next(new CustomError('No files found', 404));
  } catch (error) {
    next(error);
  }
};

// Delete a tag
const tagDelete = async (
  req: Request<{id: string}>,
  res: Response<MessageResponse, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    if (!res.locals.user || res.locals.user.level_name !== 'Admin') {
      next(new CustomError('Not authorized', 401));
      return;
    }
    const tag = await deleteTag(Number(req.params.id));
    if (tag) {
      res.json(tag);
      return;
    }
    const error = new CustomError('Tag not found', 404);
    next(error);
  } catch (error) {
    next(error);
  }
};

// Delete a tag from a media item
const tagDeleteFromMedia = async (
  req: Request<{tag_id: string; media_id: string}>,
  res: Response<MessageResponse, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    if (!res.locals.user || !res.locals.user.user_id) {
      next(new CustomError('Not authorized', 401));
      return;
    }
    const tag = await deleteTagFromMedia(
      Number(req.params.tag_id),
      Number(req.params.media_id),
      res.locals.user.user_id
    );
    if (tag) {
      res.json(tag);
      return;
    }
    const error = new CustomError('Tag not found', 404);
    next(error);
  } catch (error) {
    next(error);
  }
};

export {
  tagListGet,
  tagListByMediaIdGet,
  tagPost,
  tagDelete,
  tagFilesByTagGet,
  tagDeleteFromMedia,
};
