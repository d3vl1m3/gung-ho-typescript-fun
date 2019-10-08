import CollectionServiceAbstract from '@/classes/services/abstracts/CollectionServiceAbstract';
import faker from 'faker';
import Error from '@/classes/models/Error';

export default class ErrorCollectionService extends CollectionServiceAbstract<Error> {
  protected generate(amount: number): Error[] {
    const items = [];
    for ( let i = 0; i < amount; i += 1) {
      items.push(new Error(
        faker.lorem.words(Math.floor((Math.random() * 13) + 3)),
        'ERR: ' + faker.lorem.words(Math.floor((Math.random() * 13) + 3)),
      ));
    }

    return items;
  }
}
