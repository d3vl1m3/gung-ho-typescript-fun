import {Item} from '@vuex-orm/core/lib/data';
import PostEntity from '@/classes/entities/PostEntity';
import PropsInterface from '@/classes/models/interfaces/PropsInterface';

// @ts-ignore
export default interface UserPropsInterface extends PropsInterface {
  email: string;
  name: string;
  posts?: Array<Item<PostEntity>>;
}
