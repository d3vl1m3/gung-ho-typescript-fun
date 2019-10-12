import Item from '@vuex-orm/core/lib/data/Item';
import PostEntity from '@/classes/entities/PostEntity';

export default interface UserInterface {
  name: string;
  email: string;
  posts: Array<Item<PostEntity>>;
}
