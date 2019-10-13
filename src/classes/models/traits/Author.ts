import AuthorPropsInterface from '@/classes/models/interfaces/AuthorPropsInterface';

export default class Author {
  private readonly _author: number;

  constructor(options: AuthorPropsInterface) {
    this._author = options.author;
  }

  get author(): number {
    return this._author;
  }
}
