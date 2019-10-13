import {Attr} from '@vuex-orm/core';
import MediaEntityFieldInterface from '@/classes/entities/interfaces/MediaEntityFieldInterface';

export default interface ImageEntityFieldsInterface extends MediaEntityFieldInterface {
  name: Attr;
  href: Attr;
}
