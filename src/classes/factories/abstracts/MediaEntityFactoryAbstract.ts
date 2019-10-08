import EntityFactoryAbstract from '@/classes/factories/abstracts/EntityFactoryAbstract';
import MediaAbstract from '@/classes/models/abstracts/MediaAbstract';
import MediaCollectionAbstract from '@/classes/collections/abstracts/MediaCollectionAbstract';

export default class MediaEntityFactoryAbstract <T extends MediaCollectionAbstract<U>, U extends MediaAbstract >
  extends EntityFactoryAbstract<T, U> {
  protected format(item: U): object {
    return {
      createdAt:  item.createdAt,
      updatedAt:  item.updatedAt,
      author:  item.author,
    };
  }
}
