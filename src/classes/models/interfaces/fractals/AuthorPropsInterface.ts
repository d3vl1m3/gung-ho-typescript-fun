import Item from '@vuex-orm/core/lib/data/Item';
import UserEntity from '@/classes/entities/UserEntity';

export default interface AuthorPropsInterface {
  author: Item<UserEntity>;

}
