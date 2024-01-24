import {
  fetchAllMedia,
  fetchMediaById,
  fetchMediaByTag,
} from '../models/mediaModel';

export default {
  Query: {
    mediaItems: async () => {
      return await fetchAllMedia();
    },
    mediaItem: async (_parent: undefined, args: {media_id: string}) => {
      console.log(args);
      const id = Number(args.media_id);
      return await fetchMediaById(id);
    },
    mediaItemsByTag: async (_parent: undefined, args: {tag: string}) => {
      console.log('tag id is', args.tag);
      return await fetchMediaByTag(args.tag);
    },
  },
};
