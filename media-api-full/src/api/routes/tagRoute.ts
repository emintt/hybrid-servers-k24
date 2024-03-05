import express from 'express';
import {
  tagListGet,
  tagListByMediaIdGet,
  tagPost,
  tagDelete,
  tagFilesByTagGet,
  tagDeleteFromMedia,
} from '../controllers/tagController';
import {authenticate, validationErrors} from '../../middlewares';
import {body} from 'express-validator';

const router = express.Router();

router
  .route('/')
  .get(tagListGet)
  .post(
    authenticate,
    body('tag_name').notEmpty().isString().escape(),
    validationErrors,
    tagPost
  );

router
  .route('/bymedia/:id')
  .get(tagListByMediaIdGet)
  .delete(authenticate, tagDeleteFromMedia);

router.route('/bytag/:tag_id').get(tagFilesByTagGet);

router.route('/:id').delete(authenticate, tagDelete);

export default router;
