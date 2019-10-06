import {Sex} from '@/enum/Sex';

export default class Character {
  private _name: string = '';
  private _dob: Date | null = null;
  private _sex: Sex  = Sex.NONE;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get dob(): Date | null {
    return this._dob;
  }

  set dob(value: Date | null) {
    this._dob = value;
  }

  get sex(): Sex {
    return this._sex;
  }

  set sex(value: Sex) {
    this._sex = value;
  }

  constructor(name: string, dob: Date, sex: Sex = Sex.NONE) {
    this.name = name;
    this.dob = dob;
    this.sex = sex;
  }
}
