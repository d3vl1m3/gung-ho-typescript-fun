import EntityAbstract from '@/classes/entities/abstracts/EntityAbstract';
import UserEntity from '@/classes/entities/UserEntity';

export default class MediaEntityAbstract extends EntityAbstract {
  public static fields() {
    return {
      ...super.fields(),
      ...{
        createdAt: this.increment(),
        updatedAt: this.attr(null),
        user_id: this.attr(null),
        author: this.belongsTo(UserEntity, 'user_id'),
      },
    };
  }
}
