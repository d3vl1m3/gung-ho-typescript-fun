import MediaEntityAbstract from '@/classes/entities/abstracts/MediaEntityAbstract';
import PostEntityFieldsInterface from '@/classes/entities/interfaces/PostEntityFieldsInterface';

export default class PostEntity extends MediaEntityAbstract {
  public static entity = 'posts';

  public static fields(): PostEntityFieldsInterface {
    return {
      ...super.fields(),
      ...{
        title: this.attr(null),
        body: this.attr(null),
      },
    };
  }
}
