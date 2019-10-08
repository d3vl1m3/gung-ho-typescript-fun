import MediaEntityFactoryAbstract from '@/classes/factories/abstracts/MediaEntityFactoryAbstract';
import Post from '@/classes/models/Post';
import PostCollection from '@/classes/collections/PostCollection';

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
