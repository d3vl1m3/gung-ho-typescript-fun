import UserEntity from '@/classes/entities/UserEntity';
import Increment from '@vuex-orm/core/lib/attributes/types/Increment';
import TimeStampEntityAbstract from '@/classes/entities/abstracts/TimeStampEntityAbstract';

export default class MediaEntityAbstract extends TimeStampEntityAbstract {
  public static fields(): {id: Increment} {
    return {
      ...super.fields(),
      ...{
        user_id: this.attr(null),
        author: this.belongsTo(UserEntity, 'user_id'),
      },
    };
  }
}
