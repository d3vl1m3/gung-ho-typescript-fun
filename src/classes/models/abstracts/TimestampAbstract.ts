export default class TimestampAbstract {
  private readonly _updatedAt?: Date;
  private readonly _createdAt?: Date;

  constructor(createdAt?: Date, updatedAt?: Date) {
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  get updatedAt(): Date|undefined {
    return this._updatedAt;
  }

  get createdAt(): Date|undefined {
    return this._createdAt;
  }
}
