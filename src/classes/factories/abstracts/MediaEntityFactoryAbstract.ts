import EntityFactoryAbstract from '@/classes/factories/abstracts/EntityFactoryAbstract';
import MediaCollectionAbstract from '@/classes/collections/abstracts/MediaCollectionAbstract';


// @ts-ignore
export default class MediaEntityFactoryAbstract <T extends MediaCollectionAbstract<U>, U extends MediaMixin >
  extends EntityFactoryAbstract<T, U> {
  protected format(item: U): object {
    return {
      createdAt:  item.createdAt,
      updatedAt:  item.updatedAt,
      author:  item.author,
    };
  }
}
