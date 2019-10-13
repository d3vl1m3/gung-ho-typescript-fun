import MediaMixin from '@/classes/models/mixins/MediaMixin';
import PostPropsInterface from '@/classes/models/interfaces/PostPropsInterface';

export default class Post extends MediaMixin {
  private readonly _title: string;
  private readonly _body: string;

  get title(): string {
    return this._title;
  }

  get body(): string {
    return this._body;
  }

  constructor(options: PostPropsInterface) {
    super(options);
    this._title = options.title;
    this._body = options.body;
  }

}
