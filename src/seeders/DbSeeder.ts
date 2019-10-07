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
      new Character('Liam' , Sex.MALE),
      new Character('Beth' , Sex.FEMALE),
      new Character('Tara', Sex.FEMALE),
      new Character('Frank', Sex.MALE),
    ]);

    CharacterEntity.insert({
      data: new CharacterEntityFactory(characters).items,
    });
  }
}
