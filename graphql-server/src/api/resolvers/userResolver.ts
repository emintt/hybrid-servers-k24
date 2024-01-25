import {UserWithNoPassword} from '@sharedTypes/DBTypes';
import {fetchData} from '../../lib/functions';

export default {
  Query: {
    users: async () => {
      const users = await fetchData<UserWithNoPassword[]>(
        process.env.AUTH_SERVER + 'users/',
      );
      return users;
    },
  },
};
