export default class User {
  private readonly _name: string = '';
  private readonly _email: string = '';

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
  }
}
