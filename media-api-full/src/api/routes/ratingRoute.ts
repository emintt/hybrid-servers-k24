import express from 'express';
import {
  ratingListGet,
  ratingListByMediaIdGet,
  ratingListByUserIdGet,
  ratingPost,
  ratingDelete,
  ratingAverageByMediaIdGet,
} from '../controllers/ratingController';
import {authenticate} from '../../middlewares';
import {body} from 'express-validator';

const router = express.Router();

router
  .route('/')
  .get(ratingListGet)
  .post(
    authenticate,
    body('rating_value').notEmpty().isInt({min: 1, max: 5}),
    body('media_id').notEmpty().isNumeric(),
    ratingPost
  );

router.route('/bymedia/:id').get(ratingListByMediaIdGet);

router.route('/byuser/:id').get(ratingListByUserIdGet);

router.route('/average/:id').get(ratingAverageByMediaIdGet);

router.route('/:id').delete(authenticate, ratingDelete);

export default router;
