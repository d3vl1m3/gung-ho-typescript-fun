import TimestampPropsInterface from '@/classes/models/interfaces/TimestampPropsInterface';

export default class Timestamp {
  private readonly _createdAt: Date;
  private readonly _updatedAt: Date;

  constructor(options: TimestampPropsInterface) {
    this._createdAt = options.createdAt;
    this._updatedAt = options.updatedAt;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
}
