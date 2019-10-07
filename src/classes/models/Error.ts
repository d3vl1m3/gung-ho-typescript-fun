export default class Error {
  private _note: string;
  private _error?: string;

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    this._note = value;
  }
  get error(): string|undefined {
    return this._error;
  }

  set error(value: string|undefined) {
    this._error = value;
  }

  constructor(message: string, error?: string) {
    this._note = message;
    this._error = error;
  }
}
