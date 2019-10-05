import CharacterAbstract from '@/models/characters/CharacterAbstract';

export default abstract class FightingCharacterAbstract extends CharacterAbstract {

  /* Props */
  // tslint:disable-next-line:variable-name
  private _hp: number = 0;
  // tslint:disable-next-line:variable-name
  private _baseAtk: number = 0;

  /* Getters and setters */
  get hp(): number {
    return this._hp;
  }

  set hp(value: number) {
    this._hp = value;
  }

  get baseAtk(): number {
    return this._baseAtk;
  }

  set baseAtk(value: number) {
    this._baseAtk = value;
  }

  /* Constructor */
  protected constructor(name: string, hp: number = 10, baseAtk: number = 1) {
    super(name);
    this.hp = hp;
    this.baseAtk = baseAtk;
  }

}
