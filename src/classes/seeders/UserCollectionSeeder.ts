import CollectionSeederAbstract from '@/classes/seeders/abstracts/CollectionSeederAbstract';
import User from '@/classes/models/User';
import faker from 'faker';

export default class UserCollectionSeeder extends CollectionSeederAbstract<User> {
  protected generateCollection(amount: number): User[] {
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
