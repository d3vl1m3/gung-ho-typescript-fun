import {Attr} from '@vuex-orm/core';
import MediaEntityFieldInterface from '@/classes/entities/interfaces/MediaEntityFieldInterface';

export default interface PostEntityFieldsInterface extends MediaEntityFieldInterface {
  title: Attr;
  body: Attr;
}
