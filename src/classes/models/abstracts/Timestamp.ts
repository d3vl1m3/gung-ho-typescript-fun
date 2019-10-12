import {TimestampInterface} from '@/classes/models/interfaces/TimestampInterface';

export default class Timestamp {
  private readonly _updatedAt: Date;
  private readonly _createdAt: Date;

  constructor(options: TimestampInterface) {
    this._createdAt = options.createdAt;
    this._updatedAt = options.updatedAt;
  }

  get updatedAt(): Date|undefined {
    return this._updatedAt;
  }

  get createdAt(): Date|undefined {
    return this._createdAt;
  }
}
