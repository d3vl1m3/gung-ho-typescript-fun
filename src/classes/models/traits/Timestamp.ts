import TimestampPropsInterface from '@/classes/models/interfaces/TimestampPropsInterface';

export default class Timestamp {
  protected _createdAt: Date;
  protected _updatedAt: Date;

  get createdAt(): Date | undefined {
    return this._createdAt;
  }

  get updatedAt(): Date | undefined {
    return this._updatedAt;
  }

  constructor(options: TimestampPropsInterface) {
    this._createdAt = options.createdAt;
    this._updatedAt = options.updatedAt;
  }
}
