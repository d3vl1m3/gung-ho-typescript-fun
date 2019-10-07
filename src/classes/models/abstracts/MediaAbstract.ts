import UserEntity from '@/classes/entities/UserEntity';
import {Item} from '@vuex-orm/core/lib/data';

export default class MediaInterface {
  protected _updatedAt?: Date;
  protected _createdAt?: Date;
  protected _author?: Item<UserEntity>;

  get author(): Item<UserEntity>|undefined {
    return this._author;
  }

  set author(value: Item<UserEntity>|undefined) {
    this._author = value;
  }

  get createdAt(): Date|undefined {
    return this._createdAt;
  }

  set createdAt(value: Date|undefined) {
    this._createdAt = value;
  }

  get updatedAt(): Date|undefined {
    return this._updatedAt;
  }

  set updatedAt(value: Date|undefined) {
    this._updatedAt = value;
  }

  constructor(createdAt?: Date, updatedAt?: Date, author?: Item<UserEntity>) {
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.author = author;
  }
}
