import MediaEntityAbstract from '@/classes/entities/abstracts/MediaEntityAbstract';

export default class PostEntity extends MediaEntityAbstract {
  public static entity = 'posts';

  public static fields() {
    return {
      ...super.fields(),
      ...{
        title: this.attr(null),
        body: this.attr(null),
      },
    };
  }
}
