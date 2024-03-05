import {Request, Response, NextFunction} from 'express';
import {
  fetchAllLikes,
  fetchLikesByMediaId,
  fetchLikesByUserId,
  postLike,
  deleteLike,
  fetchLikesCountByMediaId,
  fetchLikeByMediaIdAndUserId,
} from '../models/likeModel';
import CustomError from '../../classes/CustomError';
import {MessageResponse} from '@sharedTypes/MessageTypes';
import {Like, TokenContent} from '@sharedTypes/DBTypes';

// list of likes
const likeListGet = async (
  req: Request,
  res: Response<Like[]>,
  next: NextFunction
) => {
  try {
    const likes = await fetchAllLikes();
    if (likes) {
      res.json(likes);
      return;
    }
    next(new CustomError('No likes found', 404));
  } catch (error) {
    next(error);
  }
};

// list of likes by media item id
const likeListByMediaIdGet = async (
  req: Request<{media_id: string}>,
  res: Response<Like[]>,
  next: NextFunction
) => {
  try {
    const likes = await fetchLikesByMediaId(Number(req.params.media_id));
    if (likes) {
      res.json(likes);
      return;
    }
    next(new CustomError('No likes found', 404));
  } catch (error) {
    next(error);
  }
};

// list of likes by user id
const likeListByUserIdGet = async (
  req: Request<{id: string}>,
  res: Response<Like[]>,
  next: NextFunction
) => {
  try {
    const likes = await fetchLikesByUserId(Number(req.params.id));
    if (likes) {
      res.json(likes);
      return;
    }
    next(new CustomError('No likes found', 404));
  } catch (error) {
    next(error);
  }
};

// Post a new like
const likePost = async (
  req: Request<{}, {}, {media_id: string}>,
  res: Response<MessageResponse, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    const result = await postLike(
      Number(req.body.media_id),
      res.locals.user.user_id
    );
    if (result) {
      res.json(result);
      return;
    }
    next(new CustomError('Like not created', 500));
  } catch (error) {
    next(error);
  }
};

// Delete a like
const likeDelete = async (
  req: Request<{id: string}>,
  res: Response<MessageResponse, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    const result = await deleteLike(
      Number(req.params.id),
      res.locals.user.user_id,
      res.locals.user.level_name
    );
    if (result) {
      res.json(result);
      return;
    }
    next(new CustomError('Like not deleted', 500));
  } catch (error) {
    next(error);
  }
};

// Fetch likes count by media id
const likeCountByMediaIdGet = async (
  req: Request<{id: string}>,
  res: Response<{count: number}>,
  next: NextFunction
) => {
  try {
    const count = await fetchLikesCountByMediaId(Number(req.params.id));
    if (count) {
      res.json({count});
      return;
    }
    next(new CustomError('No likes found', 404));
  } catch (error) {
    next(error);
  }
};

const likeByMediaIdAndUserIdGet = async (
  req: Request<{media_id: string}>,
  res: Response<Like, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    const result = await fetchLikeByMediaIdAndUserId(
      Number(req.params.media_id),
      res.locals.user.user_id
    );
    if (result) {
      res.json(result);
      return;
    }
    next(new CustomError('Like not found', 404));
  } catch (error) {
    next(error);
  }
};

export {
  likeListGet,
  likeListByMediaIdGet,
  likeListByUserIdGet,
  likePost,
  likeDelete,
  likeCountByMediaIdGet,
  likeByMediaIdAndUserIdGet,
};
