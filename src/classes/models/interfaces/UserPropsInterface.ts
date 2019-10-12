import {Item} from '@vuex-orm/core/lib/data';
import PostEntity from '@/classes/entities/PostEntity';

// @ts-ignore
export default interface UserPropsInterface {
  email: string;
  name: string;
  posts?: Array<Item<PostEntity>>;
}
