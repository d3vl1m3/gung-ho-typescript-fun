import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';
import MediaAbstract from '@/classes/models/abstracts/MediaAbstract';

export default class MediaCollectionAbstract<T extends MediaAbstract> extends CollectionAbstract<T> {}
