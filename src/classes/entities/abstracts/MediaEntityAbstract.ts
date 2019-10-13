import {Attr, BelongsTo} from '@vuex-orm/core';
import Increment from '@vuex-orm/core/lib/attributes/types/Increment';
import TimeStampEntityAbstract from '@/classes/entities/abstracts/TimeStampEntityAbstract';
import UserEntity from '@/classes/entities/UserEntity';

export default class MediaEntityAbstract extends TimeStampEntityAbstract {
  public static fields(): {id: Increment, createdAt: Attr, updatedAt: Attr, user_id: Attr, author: BelongsTo } {
    return {
      ...super.fields(),
      ...{
        user_id: this.attr(null),
        author: this.belongsTo(UserEntity, 'user_id'),
      },
    };
  }
}
