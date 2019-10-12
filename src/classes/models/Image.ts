import MediaMixin from '@/classes/models/mixins/MediaMixin';
import ImageInterface from '@/classes/models/interfaces/ImageInterface';

export default class Image extends MediaMixin {
  private readonly _name: string = '';
  private readonly _href: string = '';

  get name(): string {
    return this._name;
  }

  get href(): string {
    return this._href;
  }

  constructor(options: ImageInterface) {
    super({
      createdAt: options.createdAt,
      updatedAt: options.updatedAt,
      author: options.author,
    });
    this._name = options.name;
    this._href = options.href;
  }

}
