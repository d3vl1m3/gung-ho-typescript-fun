import Character from '@/models/Character';
import CharacterCollection from '@/models/CharacterCollection';
import EntityFactoryAbstract from '@/factories/EntityFactoryAbstract';

export default class CharacterEntityFactory extends EntityFactoryAbstract<CharacterCollection, Character> {
  protected format(item: Character): object {
    return {
      name:  item.name,
      dob:  item.dob,
      sex:  item.sex,
    };
  }
}
