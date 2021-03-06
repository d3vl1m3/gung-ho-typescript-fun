import {Image} from '@/classes/models/Image';
import ImageCollection from '@/classes/collections/ImageCollection';
import MediaEntityFactoryAbstract from '@/classes/factories/entities/abstracts/MediaEntityFactoryAbstract';

export class ImageEntityFactory extends MediaEntityFactoryAbstract<ImageCollection, Image> {
  protected format(item: Image): object {
    return {
      ...super.format(item),
      ...{
        href:  item.href,
        name:  item.name,
      },
    };
  }
}
