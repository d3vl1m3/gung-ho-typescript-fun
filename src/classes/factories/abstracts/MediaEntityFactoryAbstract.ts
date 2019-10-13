import EntityFactoryAbstract from '@/classes/factories/abstracts/EntityFactoryAbstract';
import MediaMixin from '@/classes/models/mixins/MediaMixin';
import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';


// @ts-ignore
export default class MediaEntityFactoryAbstract <T extends CollectionAbstract<U>, U extends MediaMixin >
  extends EntityFactoryAbstract<T, U> {
  /* todo: Update each 'format' return type to match an entity object */
  protected format(item: U): object {
    return {
      createdAt:  item.createdAt,
      updatedAt:  item.updatedAt,
      author:  item.author,
    };
  }
}
