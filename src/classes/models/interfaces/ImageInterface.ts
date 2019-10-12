import {Item} from '@vuex-orm/core/lib/data';
import UserEntity from '@/classes/entities/UserEntity';
import {TimestampInterface} from '@/classes/models/interfaces/TimestampInterface';

export default interface ImageInterface extends TimestampInterface {
  name: string;
  href: string;
  author?: Item<UserEntity>;
}
