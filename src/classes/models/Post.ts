import MediaAbstract from '@/classes/models/abstracts/MediaAbstract';

export default class Post extends MediaAbstract {

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  private _title: string = '';
  private _body: string = '';

  constructor(title: string, body: string, createdAt?: Date, updatedAt?: Date, author?: number) {
    super(createdAt, updatedAt, author);
    this.title = title;
    this.body = body;
  }

}
