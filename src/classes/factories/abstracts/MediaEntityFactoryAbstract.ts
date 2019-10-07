import EntityFactoryAbstract from '@/classes/factories/abstracts/EntityFactoryAbstract';
import MediaCollectionAbstract from '@/classes/collections/abstracts/MediaCollectionAbstract';
import MediaAbstract from '@/classes/models/abstracts/MediaAbstract';

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
