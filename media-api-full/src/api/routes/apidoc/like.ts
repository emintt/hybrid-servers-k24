/**
 * @api {get} /likes Get Likes
 * @apiName GetLikes
 * @apiGroup Like
 *
 * @apiSuccess {Object[]} likes List of likes.
 * @apiSuccess {Number} likes.like_id ID of the like.
 * @apiSuccess {Number} likes.user_id ID of the user who liked.
 * @apiSuccess {Number} likes.media_id ID of the media that was liked.
 * @apiSuccess {created_at} likes.created_at Timestamp of when the like was created.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "like_id": 1,
 *         "user_id": 1,
 *         "media_id": 1
 *         "created_at": "2022-01-01T00:00:00.000Z"
 *       },
 *       ...
 *     ]
 *
 * @apiError LikesNotFound The likes were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No likes found"
 *     }
 */
/**
 * @api {post} /likes Post Like
 * @apiName PostLike
 * @apiGroup Like
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {Number} media_id ID of the media to be liked.
 *
 * @apiExample {json} Request-Example:
 *     POST /likes
 *     {
 *       "media_id": 1
 *     }
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Like added"
 *     }
 *
 * @apiError MediaNotFound The media was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "message": "Like not created"
 *     }
 */
/**
 * @api {get} /likes/bymedia/:id Get Likes by Media ID
 * @apiName GetLikesByMediaId
 * @apiGroup Like
 *
 * @apiParam {Number} id Media's unique ID.
 *
 *
 * @apiSuccess {Object[]} likes List of likes.
 * @apiSuccess {Number} likes.like_id ID of the like.
 * @apiSuccess {Number} likes.user_id ID of the user who liked.
 * @apiSuccess {Number} likes.media_id ID of the media that was liked.
 * @apiSuccess {created_at} likes.created_at Timestamp of when the like was created.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "like_id": 1,
 *         "user_id": 1,
 *         "media_id": 1
 *         "created_at": "2022-01-01T00:00:00.000Z"
 *       },
 *       ...
 *     ]
 *
 * @apiError LikesNotFound The likes were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No likes found"
 *     }
 */
/**
 * @api {get} /likes/byuser Get Likes by User Token
 * @apiName GetLikesByUserToken
 * @apiGroup Like
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiSuccess {Object[]} likes List of likes.
 * @apiSuccess {Number} likes.like_id ID of the like.
 * @apiSuccess {Number} likes.user_id ID of the user who liked.
 * @apiSuccess {Number} likes.media_id ID of the media that was liked.
 * @apiSuccess {created_at} likes.created_at Timestamp of when the like was created.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "like_id": 1,
 *         "user_id": 1,
 *         "media_id": 1
 *         "created_at": "2022-01-01T00:00:00.000Z"
 *       },
 *       ...
 *     ]
 *
 * @apiError LikesNotFound The likes were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No likes found"
 *     }
 */
/**
 * @api {get} /likes/count/:id Get Like Count by Media ID
 * @apiName GetLikeCountByMediaId
 * @apiGroup Like
 *
 * @apiParam {Number} id Media's unique ID.
 *
 * @apiSuccess {Number} count Count of likes for the media.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "count": 5
 *     }
 *
 * @apiError LikesNotFound The likes were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No likes found"
 *     }
 */
/**
 * @api {delete} /like/:id Delete Like
 * @apiName DeleteLike
 * @apiGroup Like
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {Number} id Like's unique ID.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Like deleted"
 *     }
 *
 * @apiError LikeNotFound The like was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "message": "Like not deleted"
 *     }
 */
