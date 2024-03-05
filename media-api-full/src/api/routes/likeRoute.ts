import express from 'express';
import {
  likeListGet,
  likeListByMediaIdGet,
  likeListByUserIdGet,
  likePost,
  likeDelete,
  likeCountByMediaIdGet,
  likeByMediaIdAndUserIdGet,
} from '../controllers/likeController';
import {authenticate, validationErrors} from '../../middlewares';
import {body} from 'express-validator';

const router = express.Router();

router
  .route('/')
  .get(likeListGet)
  .post(
    authenticate,
    body('media_id').notEmpty().isInt(),
    validationErrors,
    likePost
  );

router.route('/bymedia/:media_id').get(likeListByMediaIdGet);

router
  .route('/bymedia/user/:media_id')
  .get(authenticate, likeByMediaIdAndUserIdGet);

router.route('/byuser/:id').get(authenticate, likeListByUserIdGet);

router.route('/count/:id').get(likeCountByMediaIdGet);

router.route('/:id').delete(authenticate, likeDelete);

export default router;
