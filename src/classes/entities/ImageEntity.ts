import MediaEntityAbstract from '@/classes/entities/abstracts/MediaEntityAbstract';
import ImageEntityFieldsInterface from '@/classes/entities/interfaces/ImageEntityFieldsInterface';

export default class ImageEntity extends MediaEntityAbstract {
  public static entity = 'images';

  public static fields(): ImageEntityFieldsInterface {
    return {
      ...super.fields(),
      ...{
        name: this.attr(null),
        href: this.attr(null),
      },
    };
  }
}
