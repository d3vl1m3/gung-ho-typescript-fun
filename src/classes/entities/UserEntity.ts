import EntityAbstract from '@/classes/entities/abstracts/EntityAbstract';
import PostEntity from '@/classes/entities/PostEntity';
import UserEntityFieldsInterface from '@/classes/entities/interfaces/UserEntityFieldsInterface';

export default class UserEntity extends EntityAbstract {
  public static entity = 'users';

  public static fields(): UserEntityFieldsInterface {
    return {
      ...super.fields(),
      ...{
        email: this.attr(null),
        name: this.attr(null),
        posts: this.hasMany(PostEntity, 'user_id'),
      },
    };
  }
}
