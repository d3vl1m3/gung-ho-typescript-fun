import Item from '@vuex-orm/core/lib/data/Item';
import UserEntity from '@/classes/entities/UserEntity';
import AuthorPropsInterface from '@/classes/models/interfaces/fractals/AuthorPropsInterface';

export default class Author {
  private readonly _author: Item<UserEntity>;

  constructor(options: AuthorPropsInterface) {
    this._author = options.author;
  }

  get author(): Item<UserEntity> {
    return this._author;
  }
}
