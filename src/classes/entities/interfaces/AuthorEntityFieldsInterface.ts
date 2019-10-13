import {Attr, BelongsTo} from '@vuex-orm/core';
import EntityFieldsInterface from '@/classes/entities/interfaces/EntityFieldsInterface';

export default interface AuthorEntityFieldsInterface extends EntityFieldsInterface {
  author: BelongsTo;
  user_id: Attr;
}
