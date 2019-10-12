import TimestampPropsInterface from '@/classes/models/interfaces/fractals/TimestampPropsInterface';

export default class Timestamp {
  private readonly _updatedAt: Date;
  private readonly _createdAt: Date;

  constructor(options: TimestampPropsInterface) {
    this._createdAt = options.createdAt;
    this._updatedAt = options.updatedAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}
