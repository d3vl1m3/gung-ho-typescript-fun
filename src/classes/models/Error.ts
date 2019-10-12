import ErrorPropsInterface from '@/classes/models/interfaces/ErrorPropsInterface';

export default class Error {
  private readonly _note: string;
  private readonly _error?: string;

  get note(): string {
    return this._note;
  }

  get error(): string|undefined {
    return this._error;
  }

  constructor(options: ErrorPropsInterface) {
    this._note = options.note;
    this._error = options.error;
  }
}
