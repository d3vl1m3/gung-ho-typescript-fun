import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';
import MediaMixin from '@/classes/models/mixins/MediaMixin';

// @ts-ignore
export default class MediaCollectionAbstract<T extends MediaMixin> extends CollectionAbstract<T> {}
