import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';
import faker from 'faker';
import User from '@/classes/models/User';

export default class UserCollection extends CollectionAbstract<User> {
  protected generateRandomCollection(amount: number): User[] {
    const items = [];

    for ( let i = 0; i < amount; i += 1) {
      items.push(new User(
        faker.name.findName(),
        faker.internet.email(),
      ));
    }

    return items;
  }
}
