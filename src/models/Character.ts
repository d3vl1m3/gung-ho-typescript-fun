import {Sex} from '@/enum/Sex';

export default class Character {
  private _name: string = '';
  private _sex: Sex  = Sex.NONE;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get sex(): Sex {
    return this._sex;
  }

  set sex(value: Sex) {
    this._sex = value;
  }

  constructor(name: string, sex: Sex = Sex.NONE) {
    this.name = name;
    this.sex = sex;
  }
}
