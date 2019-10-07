import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';
import MediaAbstract from '@/classes/models/abstracts/MediaAbstract';

// @ts-ignore
export default class MediaCollectionAbstract<T extends MediaAbstract> extends CollectionAbstract<T> {
  // Any class extending this one shoulg implement `generateRandomCollection()` properly
}
