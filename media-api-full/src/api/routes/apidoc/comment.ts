/**
 * @api {get} /comment Get Comments
 * @apiName GetComments
 * @apiGroup Comment
 *
 * @apiSuccess {Object[]} comments List of comments.
 * @apiSuccess {Number} comments.comment_id ID of the comment.
 * @apiSuccess {Number} comments.user_id ID of the user who commented.
 * @apiSuccess {String} comments.media_id ID of the media that was commented on.
 * @apiSuccess {String} comments.comment_text Content of the comment.
 * @apiSuccess {created_at} comments.created_at Timestamp of when the comment was created.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "comment_id": 1,
 *         "user_id": 1,
 *         "media_id": 1,
 *         "comment_text": "This is a comment"
 *         "created_at": "2022-01-01T00:00:00.000Z"
 *       },
 *       ...
 *     ]
 *
 * @apiError CommentsNotFound The comments were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No comments found"
 *     }
 */
/**
 * @api {post} /comment Post Comment
 * @apiName PostComment
 * @apiGroup Comment
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {String} comment_text Text of the comment.
 * @apiParam {Number} media_id ID of the media.
 *
 * @apiExample {json} Request-Example:
 *     POST /comment
 *     {
 *       "comment_text": "This is a comment",
 *       "media_id": 1
 *     }
 *
 * @apiSuccess {String} message Success message.
 * @apiSuccess {Object} comment Posted comment details.
 * @apiSuccess {Number} comment.comment_id ID of the comment.
 * @apiSuccess {Number} comment.user_id ID of the user who commented.
 * @apiSuccess {String} comment.media_id ID of the media that was commented on.
 * @apiSuccess {String} comment.content Content of the comment.
 * @apiSuccess {created_at} comment.created_at Timestamp of when the comment was created.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Comment posted successfully",
 *       "comment": {
 *         "comment_id": 1,
 *         "user_id": 1,
 *         "media_id": 1,
 *         "content": "This is a comment"
 *         "created_at": "2022-01-01T00:00:00.000Z"
 *       }
 *     }
 *
 * @apiError CommentNotPosted The comment was not posted.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Comment not posted"
 *     }
 */
/**
 * @api {get} /comment/bymedia/:id Get Comments by Media ID
 * @apiName GetCommentsByMediaId
 * @apiGroup Comment
 *
 * @apiParam {Number} id Media's unique ID.
 *
 * @apiSuccess {Object[]} comments List of comments for the media.
 * @apiSuccess {Number} comments.comment_id ID of the comment.
 * @apiSuccess {Number} comments.user_id ID of the user who commented.
 * @apiSuccess {String} comment.media_id ID of the media that was commented on.
 * @apiSuccess {String} comments.content Content of the comment.
 * @apiSuccess {created_at} comments.created_at Timestamp of when the comment was created.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "comment_id": 1,
 *         "user_id": 1,
 *         "media_id": 1,
 *         "content": "This is a comment"
 *         "created_at": "2022-01-01T00:00:00.000Z"
 *       },
 *       ...
 *     ]
 *
 * @apiError CommentsNotFound The comments were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No comments found"
 *     }
 */
/**
 * @api {get} /comment/byuser Get Comments by User Token
 * @apiName GetCommentsByUserToken
 * @apiGroup Comment
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiSuccess {Object[]} comments List of comments for the user.
 * @apiSuccess {Number} comments.comment_id ID of the comment.
 * @apiSuccess {Number} comments.user_id ID of the user who commented.
 * @apiSuccess {String} comments.content Content of the comment.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "comment_id": 1,
 *         "user_id": 1,
 *         "content": "This is a comment"
 *       },
 *       ...
 *     ]
 *
 * @apiError CommentsNotFound The comments were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No comments found"
 *     }
 */
/**
 * @api {get} /comment/count/:id Get Comment Count by Media ID
 * @apiName GetCommentCountByMediaId
 * @apiGroup Comment
 *
 * @apiParam {Number} id Media's unique ID.
 *
 * @apiSuccess {Number} count Count of comments for the media.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "count": 5
 *     }
 *
 * @apiError CommentsNotFound The comments were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No comments found for this media"
 *     }
 */
/**
 * @api {get} /comment/:id Get Comment by ID
 * @apiName GetCommentById
 * @apiGroup Comment
 *
 * @apiParam {Number} id Comment's unique ID.
 *
 * @apiSuccess {Number} comment_id ID of the comment.
 * @apiSuccess {Number} user_id ID of the user who commented.
 * @apiSuccess {Number} media_id ID of the media that was commented on.
 * @apiSuccess {String} content Content of the comment.
 * @apiSuccess {created_at} created_at Timestamp of when the comment was created.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "comment_id": 1,
 *       "user_id": 1,
 *       "media_id": 1,
 *       "content": "This is a comment"
 *       "created_at": "2022-01-01T00:00:00.000Z"
 *     }
 *
 * @apiError CommentNotFound The comment was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Comment not found"
 *     }
 */
/**
 * @api {put} /comment Update Comment
 * @apiName UpdateComment
 * @apiGroup Comment
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {String} comment_text Text of the comment.
 *
 * @apiExample {json} Request-Example:
 *     PUT /comment
 *     {
 *       "comment_text": "This is an updated comment"
 *     }
 *
 * @apiSuccess {Number} comment_id ID of the updated comment.
 * @apiSuccess {Number} user_id ID of the user who commented.
 * @apiSuccess {Number} media_id ID of the media that was commented on.
 * @apiSuccess {String} content Updated content of the comment.
 * @apiSuccess {created_at} created_at Timestamp of when the comment was created.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "comment_id": 1,
 *       "user_id": 1,
 *       "media_id": 1,
 *       "content": "This is an updated comment"
 *       "created_at": "2022-01-01T00:00:00.000Z"
 *     }
 *
 * @apiError CommentNotFound The comment was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No comment found with this ID"
 *     }
 */
/**
 * @api {delete} /comment Delete Comment
 * @apiName DeleteComment
 * @apiGroup Comment
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {Number} id Comment's unique ID.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Comment deleted"
 *     }
 *
 * @apiError CommentNotFound The comment was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Comment not found"
 *     }
 */
