import CharacterCollection from '@/models/CharacterCollection';
import {Sex} from '@/enum/Sex';
import CharacterEntityFactory from '@/factories/CharacterEntityFactory';
import Character from '@/models/Character';
import CharacterEntity from '@/entities/CharacterEntity';

export default class DbSeeder {

  public static init() {
    DbSeeder.seedCharacters();
  }

  private static seedCharacters() {
    const characters = new CharacterCollection([
      new Character('Liam', new Date('1988/10/06 GMT') , Sex.MALE),
      new Character('Beth', new Date('1991/03/23 GMT') , Sex.FEMALE),
      new Character('Tara', new Date('1995/12/12 GMT') , Sex.FEMALE),
      new Character('Frank', new Date('2998/01/01 GMT') , Sex.MALE),
    ]);

    CharacterEntity.insert({
      data: new CharacterEntityFactory(characters).items,
    });
  }
}
