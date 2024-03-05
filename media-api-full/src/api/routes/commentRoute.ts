import express from 'express';
import {
  commentListGet,
  commentListByMediaIdGet,
  commentListByUserGet,
  commentCountByMediaIdGet,
  commentGet,
  commentPost,
  commentPut,
  commentDelete,
} from '../controllers/commentController';
import {authenticate, validationErrors} from '../../middlewares';
import {body} from 'express-validator';

const router = express.Router();

router
  .route('/')
  .get(commentListGet)
  .post(
    authenticate,
    body('comment_text').notEmpty().isString().escape(),
    body('media_id').notEmpty().isInt(),
    validationErrors,
    commentPost
  );

router.route('/bymedia/:id').get(commentListByMediaIdGet);

router.route('/byuser').get(authenticate, commentListByUserGet);

router.route('/count/:id').get(commentCountByMediaIdGet);

router
  .route('/:id')
  .get(commentGet)
  .put(
    authenticate,
    body('comment_text').notEmpty().isString().escape(),
    validationErrors,
    commentPut
  )
  .delete(authenticate, commentDelete);

export default router;
