import {AuthorInterface} from '@/classes/models/interfaces/AuthorInterface';
import Item from '@vuex-orm/core/lib/data/Item';
import UserEntity from '@/classes/entities/UserEntity';

export default class Author {
  private readonly _author: Item<UserEntity>;

  constructor(options: AuthorInterface) {
    this._author = options.author;
  }

  get author(): Item<UserEntity> {
    return this._author;
  }
}
