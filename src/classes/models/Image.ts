import MediaMixin from '@/classes/models/mixins/MediaMixin';
import ImagePropsInterface from '@/classes/models/interfaces/ImagePropsInterface';

export default class Image extends MediaMixin {
  private readonly _name: string = '';
  private readonly _href: string = '';

  get name(): string {
    return this._name;
  }

  get href(): string {
    return this._href;
  }

  constructor(options: ImagePropsInterface) {
    super(options);
    this._name = options.name;
    this._href = options.href;
  }

}
