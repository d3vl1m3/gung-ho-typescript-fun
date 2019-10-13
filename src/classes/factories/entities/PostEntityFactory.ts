import MediaEntityFactoryAbstract from '@/classes/factories/entities/abstracts/MediaEntityFactoryAbstract';
import Post from '@/classes/models/Post';
import PostCollection from '@/classes/collections/PostCollection';

/**
 * Process a post to a suitable format for the Vuex ORM library to handle
 */
export default class PostEntityFactory extends MediaEntityFactoryAbstract<PostCollection, Post> {
  protected format(item: Post): object {
    return {
      ...super.format(item),
      ...{
        title:  item.title,
        body:  item.body,
      },
    };
  }
}
