import Post from '@/classes/models/Post';
import PostCollection from '@/classes/collections/PostCollection';
import MediaEntityFactoryAbstract from '@/classes/factories/abstracts/MediaEntityFactoryAbstract';

export default class UserEntityFactory extends MediaEntityFactoryAbstract<PostCollection, Post> {
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
