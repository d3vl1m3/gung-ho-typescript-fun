import PostInterface from '@/classes/models/interfaces/PostInterface';
import MediaMixin from '@/classes/models/mixins/MediaMixin';

export default class Post extends MediaMixin {

  private readonly _title: string = '';
  private readonly _body: string = '';

  get title(): string {
    return this._title;
  }

  get body(): string {
    return this._body;
  }

  constructor(options: PostInterface) {
    super({
      createdAt: options.createdAt,
      updatedAt: options.updatedAt,
      author: options.author,
    });
    this._title = options.title;
    this._body = options.body;
  }

}
