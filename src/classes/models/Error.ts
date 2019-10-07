export default class Error {
  private readonly _note: string;
  private readonly _error?: string;

  get note(): string {
    return this._note;
  }

  get error(): string|undefined {
    return this._error;
  }

  constructor(message: string, error?: string) {
    this._note = message;
    this._error = error;
  }
}
