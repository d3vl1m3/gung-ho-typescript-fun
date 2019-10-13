import AuthorPropsInterface from '@/classes/models/interfaces/AuthorPropsInterface';
import UserEntity from '@/classes/entities/UserEntity';
import {Item} from '@vuex-orm/core/lib/data';

export default class Author {
  private readonly _author: Item<UserEntity>;

  constructor(options: AuthorPropsInterface) {
    this._author = options.author;
  }

  get author(): Item<UserEntity> {
    return this._author;
  }
}
