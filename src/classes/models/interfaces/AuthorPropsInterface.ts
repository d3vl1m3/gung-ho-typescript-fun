import PropsInterface from '@/classes/models/interfaces/PropsInterface';
import {Item} from '@vuex-orm/core/lib/data';
import UserEntity from '@/classes/entities/UserEntity';

export default interface AuthorPropsInterface extends PropsInterface {
  author: Item<UserEntity>|null;
}
