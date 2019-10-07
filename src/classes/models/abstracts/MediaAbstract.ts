export default class MediaInterface {
  protected _updatedAt?: Date;
  protected _createdAt?: Date;
  protected _author?: number;

  get author(): number|undefined {
    return this._author;
  }

  set author(value: number|undefined) {
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

  constructor(createdAt?: Date, updatedAt?: Date, author?: number) {
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.author = author;
  }

}
