import EntityFactoryAbstract from '@/classes/factories/abstracts/EntityFactoryAbstract';
import User from '@/classes/models/User';
import UserCollection from '@/classes/collections/UserCollection';

export default class UserEntityFactory extends EntityFactoryAbstract<UserCollection, User> {
  protected format(item: User): object {
    return {
      name:  item.name,
      email:  item.email,
    };
  }
}
