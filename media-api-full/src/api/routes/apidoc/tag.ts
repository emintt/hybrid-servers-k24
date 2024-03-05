/**
 * @api {get} /tag List Tags
 * @apiName GetTagList
 * @apiGroup Tag
 *
 * @apiSuccess {Object[]} tags List of tags.
 * @apiSuccess {Number} tags.tag_id ID of the tag.
 * @apiSuccess {String} tags.tag_name Name of the tag.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "tag_id": 1,
 *         "tag_name": "example tag"
 *       },
 *       ...
 *     ]
 *
 * @apiError TagNotFound The tags were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No tags found"
 *     }
 */
/**
 * @api {post} /tag Post Tag
 * @apiName PostTag
 * @apiGroup Tag
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {String} tag_name Name of the tag.
 *
 * @apiExample {json} Request-Example:
 *     {
 *       "tag_name": "example tag"
 *     }
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Tag created successfully"
 *     }
 *
 * @apiError ValidationError Validation failed for the input parameters.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "ValidationError"
 *     }
 */
/**
 * @api {get} /bymedia/:id Get Tags by Media ID
 * @apiName GetTagsByMediaId
 * @apiGroup Tag
 *
 * @apiParam {Number} id Media's unique ID.
 *
 * @apiSuccess {Object[]} tags List of tags.
 * @apiSuccess {Number} tags.tag_id ID of the tag.
 * @apiSuccess {String} tags.tag_name Name of the tag.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "tag_id": 1,
 *         "tag_name": "example tag"
 *       },
 *       ...
 *     ]
 *
 * @apiError TagNotFound The tags were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No tags found"
 *     }
 */
/**
 * @api {delete} /tag/:id Delete Tag from Media
 * @apiName DeleteTagFromMedia
 * @apiGroup Tag
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {Number} id Tag's unique ID.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Tag deleted successfully"
 *     }
 *
 * @apiError TagNotFound The tag was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Tag not found"
 *     }
 */
/**
 * @api {get} /bytag/:tag_id Get Files by Tag ID
 * @apiName GetFilesByTagId
 * @apiGroup Tag
 *
 * @apiParam {Number} tag_id Tag's unique ID.
 *
 * @apiSuccess {Object[]} files List of files.
 * @apiSuccess {Number} files.file_id ID of the file.
 * @apiSuccess {String} files.file_name Name of the file.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "file_id": 1,
 *         "file_name": "example file"
 *       },
 *       ...
 *     ]
 *
 * @apiError FileNotFound The files were not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "No files found"
 *     }
 */
/**
 * @api {delete} /tag/:id Delete Tag
 * @apiName DeleteTag
 * @apiGroup Tag
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {Number} id Tag's unique ID.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Tag deleted successfully"
 *     }
 *
 * @apiError TagNotFound The tag was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Tag not found"
 *     }
 */
