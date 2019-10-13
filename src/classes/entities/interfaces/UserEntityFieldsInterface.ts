import {Attr, HasMany} from '@vuex-orm/core';
import EntityFieldsInterface from '@/classes/entities/interfaces/EntityFieldsInterface';

export default interface UserEntityFieldsInterface extends EntityFieldsInterface {
  email: Attr;
  name: Attr;
  posts: HasMany;
}
