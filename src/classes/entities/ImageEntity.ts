import MediaEntityAbstract from '@/classes/entities/abstracts/MediaEntityAbstract';

export default class ImageEntity extends MediaEntityAbstract {
  public static entity = 'images';

  public static fields() {
    return {
      ...super.fields(),
      ...{
        name: this.attr(null),
        href: this.attr(null),
      },
    };
  }
}
