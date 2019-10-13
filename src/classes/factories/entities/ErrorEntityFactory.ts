import EntityFactoryAbstract from '@/classes/factories/entities/abstracts/EntityFactoryAbstract';
import Error from '@/classes/models/Error';
import ErrorCollection from '@/classes/collections/ErrorCollection';

export default class ErrorEntityFactory extends EntityFactoryAbstract<ErrorCollection, Error> {
  protected format(item: Error): object {
    return {
      note:  item.note,
      error:  item.error,
    };
  }
}
