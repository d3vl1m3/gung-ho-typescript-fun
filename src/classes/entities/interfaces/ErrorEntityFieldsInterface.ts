import {Attr} from '@vuex-orm/core';
import EntityFieldsInterface from '@/classes/entities/interfaces/EntityFieldsInterface';

export default interface ErrorEntityFieldsInterface extends EntityFieldsInterface {
  note: Attr;
  error: Attr;
}
