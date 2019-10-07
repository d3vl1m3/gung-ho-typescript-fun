import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';
import MediaAbstract from '@/classes/models/abstracts/MediaAbstract';

// FIXME: Currently suppressing error to stop TS picking up that this class does not use `generateRandomCollection`
// @ts-ignore
export default class MediaCollectionAbstract<T extends MediaAbstract> extends CollectionAbstract<T> {
}
