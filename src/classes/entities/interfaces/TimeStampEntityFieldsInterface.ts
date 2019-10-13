import {Attr} from '@vuex-orm/core';
import EntityFieldsInterface from '@/classes/entities/interfaces/EntityFieldsInterface';

export default interface TimeStampEntityFieldsInterface extends EntityFieldsInterface {
  createdAt: Attr;
  updatedAt: Attr;
}
