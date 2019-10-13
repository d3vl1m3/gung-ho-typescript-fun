import CollectionServiceAbstract from '@/classes/services/abstracts/CollectionServiceAbstract';
import Post from '@/classes/models/Post';

export default class PostCollection extends CollectionServiceAbstract<Post> {
  protected generate(amount: number): Post[] {
    const items = [];
    for ( let i = 0; i < amount; i += 1) {
      items.push( Post.random() );
    }
    return items;
  }
}
