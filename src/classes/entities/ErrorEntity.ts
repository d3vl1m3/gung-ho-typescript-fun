import EntityAbstract from '@/classes/entities/abstracts/EntityAbstract';

export default class UserEntity extends EntityAbstract {
  public static entity = 'errors';

  public static fields() {
    return {
      ...super.fields(),
      ...{
        message: this.attr(null),
        success: this.attr(null),
        error: this.attr(null),
      },
    };
  }
}
