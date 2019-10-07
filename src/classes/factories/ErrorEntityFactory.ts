import Error from '@/classes/models/Error';
import ErrorCollection from '@/classes/collections/ErrorCollection';
import EntityFactoryAbstract from '@/classes/factories/abstracts/EntityFactoryAbstract';

export default class ErrorEntityFactory extends EntityFactoryAbstract<ErrorCollection, Error> {
  protected format(item: Error): object {
    return {
      message:  item.message,
      success:  item.success,
      error:  item.error,
    };
  }
}
