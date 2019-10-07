import MediaAbstract from '@/classes/models/abstracts/MediaAbstract';
import UserEntity from '@/classes/entities/UserEntity';
import {Item} from '@vuex-orm/core/lib/data';

export default class Post extends MediaAbstract {

  private _title: string = '';
  private _body: string = '';

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  constructor(title: string, body: string, createdAt?: Date, updatedAt?: Date, author?: Item<UserEntity>) {
    super(createdAt, updatedAt, author);
    this._title = title;
    this._body = body;
  }

}
