export default class Error {
  private _message: string;
  private _success: boolean;
  private _error: string;

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get success(): boolean {
    return this._success;
  }

  set success(value: boolean) {
    this._success = value;
  }

  get error(): string {
    return this._error;
  }

  set error(value: string) {
    this._error = value;
  }

  constructor(message: string, success: boolean, error: string) {
    this._message = message;
    this._success = success;
    this._error = error;
  }
}
