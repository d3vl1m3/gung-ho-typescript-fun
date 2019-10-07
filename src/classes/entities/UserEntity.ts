import EntityAbstract from '@/classes/entities/abstracts/EntityAbstract';

export default class UserEntity extends EntityAbstract {
  public static entity = 'users';

  public static fields() {
    return {
      ...super.fields(),
      ...{
        name: this.attr(null),
        email: this.attr(null),
      },
    };
  }
}
