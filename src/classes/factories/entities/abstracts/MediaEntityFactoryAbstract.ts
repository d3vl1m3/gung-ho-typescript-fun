import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';
import EntityFactoryAbstract from '@/classes/factories/entities/abstracts/EntityFactoryAbstract';
import {Media} from '@/classes/models/Media';

export default class MediaEntityFactoryAbstract <T extends CollectionAbstract<U>, U extends Media>
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
