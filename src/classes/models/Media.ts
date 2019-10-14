import MediaPropsInterface from '@/classes/models/interfaces/MediaPropsInterface';
import Timestamp from '@/classes/models/mixins/Timestamp';
import Author from '@/classes/models/mixins/Author';
import {extend} from '@/classes/utility';

export class Media implements Author, Timestamp {
  constructor(options: MediaPropsInterface) {
    this._createdAt = options.createdAt;
    this._updatedAt = options.updatedAt;
    this._author = options.author;
  }
}

export interface Media extends Author, Timestamp {}
extend(Media, [Author, Timestamp]);
