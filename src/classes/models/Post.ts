import {Item} from '@vuex-orm/core/lib/data';
import MediaAbstract from '@/classes/models/abstracts/MediaAbstract';
import UserEntity from '@/classes/entities/UserEntity';

export default class Post extends MediaAbstract {

  private readonly _title: string = '';
  private readonly _body: string = '';

  get title(): string {
    return this._title;
  }

  get body(): string {
    return this._body;
  }

  constructor(title: string, body: string, createdAt: Date, updatedAt: Date, author?: Item<UserEntity>) {
    super(createdAt, updatedAt, author);
    this._title = title;
    this._body = body;
  }

}
