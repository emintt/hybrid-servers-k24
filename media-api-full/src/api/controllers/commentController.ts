import {Request, Response, NextFunction} from 'express';
import {
  fetchAllComments,
  fetchCommentsByMediaId,
  fetchCommentsCountByMediaId,
  fetchCommentsByUserId,
  fetchCommentById,
  postComment,
  updateComment,
  deleteComment,
} from '../models/commentModel';
import CustomError from '../../classes/CustomError';
import {MessageResponse} from '@sharedTypes/MessageTypes';
import {Comment, TokenContent} from '@sharedTypes/DBTypes';

// list of comments
const commentListGet = async (
  req: Request,
  res: Response<Comment[]>,
  next: NextFunction
) => {
  try {
    const comments = await fetchAllComments();
    if (comments) {
      res.json(comments);
      return;
    }
    next(new CustomError('No comments found', 404));
  } catch (error) {
    next(error);
  }
};

// list of comments by media item id
const commentListByMediaIdGet = async (
  req: Request<{id: string}>,
  res: Response<Comment[]>,
  next: NextFunction
) => {
  try {
    const comments = await fetchCommentsByMediaId(Number(req.params.id));
    if (comments) {
      res.json(comments);
      return;
    }
    next(new CustomError('No comments found', 404));
  } catch (error) {
    next(error);
  }
};

// list of comments by user id
const commentListByUserGet = async (
  req: Request,
  res: Response<Comment[], {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    const comments = await fetchCommentsByUserId(
      Number(res.locals.user.user_id)
    );
    if (comments) {
      res.json(comments);
      return;
    }
    next(new CustomError('No comments found', 404));
  } catch (error) {
    next(error);
  }
};

// list of comments count by media item id
const commentCountByMediaIdGet = async (
  req: Request<{id: string}>,
  res: Response<{count: number}>,
  next: NextFunction
) => {
  try {
    const count = await fetchCommentsCountByMediaId(Number(req.params.id));
    if (count) {
      res.json({count});
      return;
    }
    next(new CustomError('No comments found', 404));
  } catch (error) {
    next(error);
  }
};

// Get a comment by id
const commentGet = async (
  req: Request<{id: string}>,
  res: Response<Comment>,
  next: NextFunction
) => {
  try {
    const comment = await fetchCommentById(Number(req.params.id));
    if (comment) {
      res.json(comment);
      return;
    }
    next(new CustomError('Comment not found', 404));
  } catch (error) {
    next(error);
  }
};

// Post a new comment
const commentPost = async (
  req: Request<{}, {}, {comment_text: string; media_id: string}>,
  res: Response<MessageResponse, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    const result = await postComment(
      Number(req.body.media_id),
      res.locals.user.user_id,
      req.body.comment_text
    );
    if (result) {
      res.json(result);
      return;
    }
    next(new CustomError('Comment not created', 500));
  } catch (error) {
    next(error);
  }
};

// Update a comment
const commentPut = async (
  req: Request<{id: string}, {}, {comment_text: string}>,
  res: Response<MessageResponse, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    const result = await updateComment(
      req.body.comment_text,
      Number(req.params.id),
      res.locals.user.user_id,
      res.locals.user.level_name
    );
    if (result) {
      res.json(result);
      return;
    }
    next(new CustomError('Comment not updated', 500));
  } catch (error) {
    next(error);
  }
};

// Delete a comment
const commentDelete = async (
  req: Request<{id: string}>,
  res: Response<MessageResponse, {user: TokenContent}>,
  next: NextFunction
) => {
  try {
    const result = await deleteComment(
      Number(req.params.id),
      res.locals.user.user_id,
      res.locals.user.level_name
    );
    if (result) {
      res.json(result);
      return;
    }
    next(new CustomError('Comment not deleted', 500));
  } catch (error) {
    next(error);
  }
};

export {
  commentListGet,
  commentListByMediaIdGet,
  commentListByUserGet,
  commentCountByMediaIdGet,
  commentGet,
  commentPost,
  commentPut,
  commentDelete,
};
