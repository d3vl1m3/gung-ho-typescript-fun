import ImagePropsInterface from '@/classes/models/interfaces/ImagePropsInterface';
import Author from '@/classes/models/mixins/Author';
import Timestamp from '@/classes/models/mixins/Timestamp';
import {extend} from '@/classes/utility';
import {Media} from '@/classes/models/Media';

export class Image extends Media implements Author, Timestamp {
  private readonly _name: string = '';
  private readonly _href: string = '';

  get name(): string {
    return this._name;
  }

  get href(): string {
    return this._href;
  }

  constructor(options: ImagePropsInterface) {
    super(options);
    this._name = options.name;
    this._href = options.href;
  }

}


export interface Image extends Author, Timestamp {}
extend(Image, [Author, Timestamp]);
