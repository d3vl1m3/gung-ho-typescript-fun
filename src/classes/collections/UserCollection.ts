import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';
import User from '@/classes/models/User';
import faker from 'faker';

export default class UserCollection extends CollectionAbstract<User> {
  public static getRandomCollection(amount: number = 5): UserCollection {
    const items = [];

    for ( let i = 0; i < amount; i += 1) {
      items.push(new User(faker.name.findName() , faker.internet.email()));
    }

    return new UserCollection(items);
  }
}
