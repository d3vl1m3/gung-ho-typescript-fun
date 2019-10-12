import UserEntity from '@/classes/entities/UserEntity';
import Item from '@vuex-orm/core/lib/data/Item';

export interface AuthorInterface {
  author: Item<UserEntity>;
}
