import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';
import Error from '@/classes/models/Error';
import faker from 'faker';

export default class ErrorCollection extends CollectionAbstract<Error> {
  public static getRandomCollection(amount: number = 5): ErrorCollection {
    const items = [];

    for ( let i = 0; i < amount; i += 1) {
      items.push(new Error(
        faker.lorem.words(Math.floor((Math.random() * 13) + 3)),
        'ERR: ' + faker.lorem.words(Math.floor((Math.random() * 13) + 3)),
      ));
    }

    return new ErrorCollection(items);
  }
}
