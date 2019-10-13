import EntityAbstract from '@/classes/entities/abstracts/EntityAbstract';
import Error from '@/classes/models/Error';
import ErrorEntityFactory from '@/classes/factories/entities/ErrorEntityFactory';
import ErrorEntityFieldsInterface from '@/classes/entities/interfaces/ErrorEntityFieldsInterface';

export default class ErrorEntity extends EntityAbstract {
  public static entity = 'errors';

  public static fields(): ErrorEntityFieldsInterface {
    return {
      ...super.fields(),
      ...{
        note: this.attr(null),
        error: this.attr(null),
      },
    };
  }

  public static add(data: Error) {
      this.insert({
        data: new ErrorEntityFactory(data).items,
      }).catch((err) => {
        // tslint:disable-next-line:no-console
        console.error('Unable to persist error to DB: ', data, err);
      });
  }
}
