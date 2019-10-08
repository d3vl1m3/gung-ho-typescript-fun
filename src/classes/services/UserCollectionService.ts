import CollectionServiceAbstract from '@/classes/services/abstracts/CollectionServiceAbstract';
import User from '@/classes/models/User';
import faker from 'faker';

export default class UserCollection extends CollectionServiceAbstract<User> {
  protected generate(amount: number): User[] {
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
