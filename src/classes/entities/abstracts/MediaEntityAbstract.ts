import EntityAbstract from '@/classes/entities/abstracts/EntityAbstract';
import UserEntity from '@/classes/entities/UserEntity';
import Increment from '@vuex-orm/core/lib/attributes/types/Increment';

export default class MediaEntityAbstract extends EntityAbstract {
  public static fields(): {id: Increment} {
    return {
      ...super.fields(),
      ...{
        createdAt: this.attr(null),
        updatedAt: this.attr(null),
        user_id: this.attr(null),
        author: this.belongsTo(UserEntity, 'user_id'),
      },
    };
  }
}
