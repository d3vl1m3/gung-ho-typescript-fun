import {BelongsTo} from '@vuex-orm/core';
import AuthorEntityFieldsInterface from '@/classes/entities/interfaces/AuthorEntityFieldsInterface';
import TimeStampEntityFieldsInterface from '@/classes/entities/interfaces/TimeStampEntityFieldsInterface';

export default interface MediaEntityFieldInterface extends AuthorEntityFieldsInterface,
  TimeStampEntityFieldsInterface {
  author: BelongsTo;
}
