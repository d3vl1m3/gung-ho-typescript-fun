import {Item} from '@vuex-orm/core/lib/data';
import TimestampAbstract from '@/classes/models/abstracts/TimestampAbstract';
import UserEntity from '@/classes/entities/UserEntity';

export default class MediaInterface extends TimestampAbstract {
  protected _author?: Item<UserEntity>;

  get author(): Item<UserEntity>|undefined {
    return this._author;
  }

  set author(value: Item<UserEntity>|undefined) {
    this._author = value;
  }

  constructor(createdAt: Date, updatedAt: Date, author?: Item<UserEntity>) {
    super(createdAt, updatedAt);
    this.author = author;
  }
}
