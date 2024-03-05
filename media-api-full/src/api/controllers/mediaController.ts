import {Request, Response, NextFunction} from 'express';
import {
  fetchAllMedia,
  fetchMediaById,
  postMedia,
  deleteMedia,
  fetchMostLikedMedia,
  fetchMostCommentedMedia,
  fetchHighestRatedMedia,
  putMedia,
} from '../models/mediaModel';
import CustomError from '../../classes/CustomError';
import {MediaResponse, MessageResponse} from '@sharedTypes/MessageTypes';
import {MediaItem, TokenContent} from '@sharedTypes/DBTypes';

const mediaListGet = async (
  req: Request,
  res: Response<MediaItem[]>,
  next: NextFunction
) => {
  try {
    const media = await fetchAllMedia();
    if (media) {
      res.json(media);
      return;
    }
    const error = new CustomError('No media found', 404);
    next(error);
  } catch (error) {
    next(error);
  }
};

const mediaGet = async (
  req: Request<{id: string}>,
  res: Response<MediaItem>,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const media = await fetchMediaById(id);
    if (media) {
      res.json(media);
      return;
    }
    const error = new CustomError('No media found', 404);
    next(error);
  } catch (error) {
    next(error);
  }
};

const mediaPost = async (
  req: Request<{}, {}, Omit<MediaItem, 'media_id' | 'created_at'>>,
  res: Response<MediaResponse, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    // add user_id to media object from token
    req.body.user_id = res.locals.user.user_id;
    console.log(req.body);
    const newMedia = await postMedia(req.body);
    if (newMedia) {
      res.json({message: 'Media created', media: newMedia});
      return;
    }
    const error = new CustomError('Media not created', 500);
    next(error);
  } catch (error) {
    next(error);
  }
};

const mediaDelete = async (
  req: Request<{id: string}>,
  res: Response<MessageResponse, {user: TokenContent; token: string}>,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = await deleteMedia(
      id,
      res.locals.user.user_id,
      res.locals.token,
      res.locals.user.level_name
    );
    if (result) {
      res.json({message: 'Media deleted'});
      return;
    }
    const error = new CustomError('Media not deleted', 500);
    next(error);
  } catch (error) {
    next(error);
  }
};

const mediaPut = async (
  req: Request<{id: string}, {}, Pick<MediaItem, 'title' | 'description'>>,
  res: Response<MediaResponse, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const media = await putMedia(
      req.body,
      id,
      res.locals.user.user_id,
      res.locals.user.level_name
    );
    if (media) {
      res.json({message: 'Media updated', media});
      return;
    }
    const error = new CustomError('Media not updated', 500);
    next(error);
  } catch (error) {
    next(error);
  }
};

const mediaListMostLikedGet = async (
  req: Request,
  res: Response<MediaItem>,
  next: NextFunction
) => {
  try {
    const media = await fetchMostLikedMedia();
    if (media) {
      res.json(media);
      return;
    }
    const error = new CustomError('No media found', 404);
    next(error);
  } catch (error) {
    next(error);
  }
};

const mediaListMostCommentedGet = async (
  req: Request,
  res: Response<MediaItem>,
  next: NextFunction
) => {
  try {
    const media = await fetchMostCommentedMedia();
    if (media) {
      res.json(media);
      return;
    }
    const error = new CustomError('No media found', 404);
    next(error);
  } catch (error) {
    next(error);
  }
};

const mediaListHighestRatedGet = async (
  req: Request,
  res: Response<MediaItem>,
  next: NextFunction
) => {
  try {
    const media = await fetchHighestRatedMedia();
    if (media) {
      res.json(media);
      return;
    }
    const error = new CustomError('No media found', 404);
    next(error);
  } catch (error) {
    next(error);
  }
};

export {
  mediaListGet,
  mediaGet,
  mediaPost,
  mediaPut,
  mediaDelete,
  mediaListMostLikedGet,
  mediaListMostCommentedGet,
  mediaListHighestRatedGet,
};
