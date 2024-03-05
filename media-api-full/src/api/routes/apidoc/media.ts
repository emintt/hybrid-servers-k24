/**
 * @api {get} /media Get Media List
 * @apiName GetMediaList
 * @apiGroup Media
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiSuccess {Object[]} media_list List of media items.
 * @apiSuccess {Number} media_list.id Media's unique ID.
 * @apiSuccess {String} media_list.filename Media's filename.
 * @apiSuccess {Number} media_list.filesize Media's filesize.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "media_id": 73,
 *             "user_id": 7,
 *             "filename": "http://localhost:3002/uploads/example.png",
 *             "filesize": 1256723,
 *             "media_type": "image/png",
 *             "title": "Example Title",
 *             "description": "Example Description",
 *             "created_at": "2024-01-26T09:38:08.000Z",
 *             "thumbnail": "http://localhost:3002/uploads/example-thumb.png"
 *         },
 *         {
 *             "media_id": 74,
 *             "user_id": 7,
 *             "filename": "http://localhost:3002/uploads/example.jpg",
 *             "filesize": 1642268,
 *             "media_type": "image/jpeg",
 *             "title": "Another Title",
 *             "description": "Another Description",
 *             "created_at": "2024-01-26T09:40:34.000Z",
 *             "thumbnail": "http://localhost:3002/uploads/example-thumb.jpg"
 *         }
 *     ]
 *
 * @apiError MediaNotFound No media items found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "No media found"
 *     }
 */
/**
 * @api {post} /media Post Media
 * @apiName PostMedia
 * @apiGroup Media
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {String} title Title of the media.
 * @apiParam {String} [description] Description of the media (optional).
 * @apiParam {String} filename Filename of the media.
 * @apiParam {String} media_type Type of the media.
 * @apiParam {Number} filesize Size of the media file.
 *
 * @apiExample {json} Request-Example:
 *     {
 *       "title": "Example Title",
 *       "description": "Example Description",
 *       "filename": "example.jpg",
 *       "media_type": "image/jpg",
 *       "filesize": 12345
 *     }
 *
 * @apiSuccess {Number} media_id ID of the media.
 * @apiSuccess {Number} user_id ID of the user who posted the media.
 * @apiSuccess {String} filename Filename of the media.
 * @apiSuccess {Number} filesize Size of the media file.
 * @apiSuccess {String} media_type Type of the media.
 * @apiSuccess {String} title Title of the media.
 * @apiSuccess {String} description Description of the media.
 * @apiSuccess {String} created_at Timestamp when the media was created.
 * @apiSuccess {String} app_id ID of the app where the media was posted.
 * @apiSuccess {String} thumbnail Thumbnail of the media.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "media_id": 1,
 *       "user_id": 1,
 *       "filename": "example.jpg",
 *       "filesize": 12345,
 *       "media_type": "image/jpg",
 *       "title": "Example Title",
 *       "description": "Example Description",
 *       "created_at": "2024-01-26T09:38:08.000Z",
 *       "app_id": "exampleAppId",
 *       "thumbnail": "http://localhost:3002/uploads/example-thumb.jpg"
 *     }
 *
 * @apiError MediaNotCreated Media not created.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "message": "Media not created"
 *     }
 *
 */
/**
 * @api {get} /media/mostliked Get Most Liked Media
 * @apiName GetMostLikedMedia
 * @apiGroup Media
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiSuccess {Object[]} media Array of most liked media objects.
 * @apiSuccess {Number} media.media_id ID of the media.
 * @apiSuccess {Number} media.user_id ID of the user who posted the media.
 * @apiSuccess {String} media.filename Filename of the media.
 * @apiSuccess {Number} media.filesize Size of the media file.
 * @apiSuccess {String} media.media_type Type of the media.
 * @apiSuccess {String} media.title Title of the media.
 * @apiSuccess {String} media.description Description of the media.
 * @apiSuccess {String} media.created_at Timestamp when the media was created.
 * @apiSuccess {String} media.app_id ID of the app where the media was posted.
 * @apiSuccess {String} media.thumbnail Thumbnail of the media.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "media_id": 1,
 *         "user_id": 1,
 *         "filename": "example.jpg",
 *         "filesize": 12345,
 *         "media_type": "image/jpg",
 *         "title": "Example Title",
 *         "description": "Example Description",
 *         "created_at": "2024-01-26T09:38:08.000Z",
 *         "app_id": "exampleAppId",
 *         "thumbnail": "http://localhost:3002/uploads/example-thumb.jpg"
 *       },
 *       ...
 *     ]
 *
 * @apiError MediaNotFound No media items found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "No media found"
 *     }
 */
/**
 * @api {get} /media/mostcommented Get Most Commented Media
 * @apiName GetMostCommentedMedia
 * @apiGroup Media
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiSuccess {Object[]} media Array of most commented media objects.
 * @apiSuccess {Number} media.media_id ID of the media.
 * @apiSuccess {Number} media.user_id ID of the user who posted the media.
 * @apiSuccess {String} media.filename Filename of the media.
 * @apiSuccess {Number} media.filesize Size of the media file.
 * @apiSuccess {String} media.media_type Type of the media.
 * @apiSuccess {String} media.title Title of the media.
 * @apiSuccess {String} media.description Description of the media.
 * @apiSuccess {String} media.created_at Timestamp when the media was created.
 * @apiSuccess {String} media.app_id ID of the app where the media was posted.
 * @apiSuccess {String} media.thumbnail Thumbnail of the media.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "media_id": 1,
 *         "user_id": 1,
 *         "filename": "example.jpg",
 *         "filesize": 12345,
 *         "media_type": "image/jpg",
 *         "title": "Example Title",
 *         "description": "Example Description",
 *         "created_at": "2024-01-26T09:38:08.000Z",
 *         "app_id": "exampleAppId",
 *         "thumbnail": "http://localhost:3002/uploads/example-thumb.jpg"
 *       },
 *       ...
 *     ]
 *
 * @apiError MediaNotFound No media items found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "No media found"
 *     }
 */
/**
 * @api {get} /media/highestrated Get Highest Rated Media
 * @apiName GetHighestRatedMedia
 * @apiGroup Media
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiSuccess {Object[]} media Array of highest rated media objects.
 * @apiSuccess {Number} media.media_id ID of the media.
 * @apiSuccess {Number} media.user_id ID of the user who posted the media.
 * @apiSuccess {String} media.filename Filename of the media.
 * @apiSuccess {Number} media.filesize Size of the media file.
 * @apiSuccess {String} media.media_type Type of the media.
 * @apiSuccess {String} media.title Title of the media.
 * @apiSuccess {String} media.description Description of the media.
 * @apiSuccess {String} media.created_at Timestamp when the media was created.
 * @apiSuccess {String} media.app_id ID of the app where the media was posted.
 * @apiSuccess {String} media.thumbnail Thumbnail of the media.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "media_id": 1,
 *         "user_id": 1,
 *         "filename": "example.jpg",
 *         "filesize": 12345,
 *         "media_type": "image/jpg",
 *         "title": "Example Title",
 *         "description": "Example Description",
 *         "created_at": "2024-01-26T09:38:08.000Z",
 *         "app_id": "exampleAppId",
 *         "thumbnail": "http://localhost:3002/uploads/example-thumb.jpg"
 *       },
 *       ...
 *     ]
 *
 * @apiError MediaNotFound No media items found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "No media found"
 *     }
 */
/**
 * @api {get} /media Get Media
 * @apiName GetMedia
 * @apiGroup Media
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {Number} id Media's unique ID.
 *
 * @apiSuccess {Object[]} media Array of media objects.
 * @apiSuccess {Number} media.media_id ID of the media.
 * @apiSuccess {Number} media.user_id ID of the user who posted the media.
 * @apiSuccess {String} media.filename Filename of the media.
 * @apiSuccess {Number} media.filesize Size of the media file.
 * @apiSuccess {String} media.media_type Type of the media.
 * @apiSuccess {String} media.title Title of the media.
 * @apiSuccess {String} media.description Description of the media.
 * @apiSuccess {String} media.created_at Timestamp when the media was created.
 * @apiSuccess {String} media.app_id ID of the app where the media was posted.
 * @apiSuccess {String} media.thumbnail Thumbnail of the media.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "media_id": 1,
 *         "user_id": 1,
 *         "filename": "example.jpg",
 *         "filesize": 12345,
 *         "media_type": "image/jpg",
 *         "title": "Example Title",
 *         "description": "Example Description",
 *         "created_at": "2024-01-26T09:38:08.000Z",
 *         "app_id": "exampleAppId",
 *         "thumbnail": "http://localhost:3002/uploads/example-thumb.jpg"
 *       },
 *       ...
 *     ]
 *
 * @apiError MediaNotFound No media items found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "No media found"
 *     }
 */
/**
 * @api {put} /media/:id Update Media
 * @apiName UpdateMedia
 * @apiGroup Media
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {Number} id Media's unique ID.
 * @apiParam {String} [title] Title of the media (optional).
 * @apiParam {String} [description] Description of the media (optional).
 *
 *
 * @apiExample {json} Request-Example:
 *     {
 *       "title": "Updated Title",
 *       "description": "Updated Description"
 *     }
 *
 * @apiSuccess {Object} media Updated media object.
 * @apiSuccess {Number} media.media_id ID of the media.
 * @apiSuccess {Number} media.user_id ID of the user who posted the media.
 * @apiSuccess {String} media.filename Filename of the media.
 * @apiSuccess {Number} media.filesize Size of the media file.
 * @apiSuccess {String} media.media_type Type of the media.
 * @apiSuccess {String} media.title Title of the media.
 * @apiSuccess {String} media.description Description of the media.
 * @apiSuccess {String} media.created_at Timestamp when the media was created.
 * @apiSuccess {String} media.app_id ID of the app where the media was posted.
 * @apiSuccess {String} media.thumbnail Thumbnail of the media.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "media_id": 1,
 *       "user_id": 1,
 *       "filename": "example.jpg",
 *       "filesize": 12345,
 *       "media_type": "image/jpg",
 *       "title": "Updated Title",
 *       "description": "Updated Description",
 *       "created_at": "2024-01-26T09:38:08.000Z",
 *       "app_id": "exampleAppId",
 *       "thumbnail": "http://localhost:3002/uploads/example-thumb.jpg"
 *     }
 *
 * @apiError MediaNotFound The media item was not found.
 * @apiError InvalidInput The input for title or description was not valid.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "No media found"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidInput"
 *     }
 */
/**
 * @api {delete} /media/:id Delete Media
 * @apiName DeleteMedia
 * @apiGroup Media
 *
 * @apiHeader {String} Authorization Bearer token for authentication.
 *
 * @apiParam {Number} id Media's unique ID.
 *
 * @apiSuccess {Object} response Response object.
 * @apiSuccess {String} response.message Success message.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Media deleted successfully"
 *     }
 *
 * @apiError MediaNotFound The media item was not found.
 * @apiError Unauthorized The user is not authorized to delete the media.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "No media found"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized"
 *     }
 */
