/* eslint-disable node/no-unpublished-import */
/* eslint-disable @typescript-eslint/no-loss-of-precision */
require('dotenv').config();
import {MediaItem, User, UserWithNoPassword} from '@sharedTypes/DBTypes';
import {getMediaItems, postMediaItem, uploadMediaFile} from './testMediaItem';
import randomstring from 'randomstring';
import {UploadResponse, UserResponse} from '@sharedTypes/MessageTypes';
import {loginUser, registerUser} from './testUser';
import app from '../src/app';
// const app = 'http://localhost:3000';

const authApi = process.env.AUTH_SERVER as string;
const uploadApi = process.env.UPLOAD_SERVER as string;

describe('Media API', () => {
  // test succesful user routes

  // test create user
  let token: string;
  let user: UserWithNoPassword;
  const testUser: Partial<User> = {
    username: 'Test User ' + randomstring.generate(7),
    email: randomstring.generate(9) + '@user.fi',
    password: 'asdfQEWR1234',
  };
  it('should create a new user', async () => {
    await registerUser(authApi, '/users', testUser);
  });

  // test login
  it('should return a user object and bearer token on valid credentials', async () => {
    const path = authApi + '/auth/login';
    console.log(path);
    const response = await loginUser(authApi, '/auth/login', {
      username: testUser.username!,
      password: testUser.password!,
    });
    token = response.token;
    user = response.user;
  });

  // test upload media file
  let uploadResponse: UploadResponse;
  it('should upload a media file', async () => {
    const mediaFile = './test/testfiles/testPic.jpeg';
    uploadResponse = await uploadMediaFile(
      uploadApi,
      '/upload',
      mediaFile,
      token
    );
  });

  // post media file
  it('should post a media file', async () => {
    if (uploadResponse.data) {
      const mediaItem: Partial<MediaItem> = {
        title: 'Test Pic',
        description: 'A test picture',
        filename: uploadResponse.data.filename,
        media_type: uploadResponse.data.media_type,
        filesize: uploadResponse.data.filesize,
      };
      await postMediaItem(app, '/api/v1/media', token, mediaItem);
    }
  });

  // test succesful media routes
  let mediaItems: MediaItem[];
  it('Should get array of media items', async () => {
    mediaItems = await getMediaItems(app);
  });

  // TODO: add test for get mediaItem by id
  // TODO: add test for post mediaItem
  // TODO: add test for put mediaItem
  // TODO: add test for delete mediaItem

  // test succesful tag routes
  // TODO: add test for get all tags
  // TODO: add test for get tags by id
  // TODO: add test for post tag
  // TODO: add test for put tag
  // TODO: add test for delete tag

  // test succesful comment routes
  // TODO: add test for get all comments
  // TODO: add test for get comment by id
  // TODO: add test for post comment
  // TODO: add test for put comment
  // TODO: add test for delete comment

  // test 404 error mediaItem routes
  // TODO: add test for get mediaItem by id
  // TODO: add test for put mediaItem
  // TODO: add test for delete mediaItem

  // test 400 error mediaItem routes with invalid data
  // TODO: add test for post mediaItem
  // TODO: add test for put mediaItem
  // TODO: add test for delete mediaItem
  // TODO: add test for get mediaItem by id

  // test 404 error tags routes
  // TODO: add test for get tag by id
  // TODO: add test for put tag
  // TODO: add test for delete tag

  // test 400 error tags route with invalid data
  // TODO: add test for post tag
  // TODO: add test for put tag
  // TODO: add test for delete tag

  // test 404 error comment routes
  // TODO: add test for get comment by id
  // TODO: add test for put comment
  // TODO: add test for delete comment

  // test 400 error comment routes with invalid data
  // TODO: add test for post comment
  // TODO: add test for put comment
  // TODO: add test for delete comment
  // TODO: add test for get comment by id
});
