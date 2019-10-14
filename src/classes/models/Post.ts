/* tslint:disable:max-classes-per-file */
import faker from 'faker';
import PostPropsInterface from '@/classes/models/interfaces/PostPropsInterface';
import UserEntity from '@/classes/entities/UserEntity';
import {getRandomItem} from '@/classes/utility';
import {Media} from '@/classes/models/Media';

export class Post extends Media {

  public static random(): Post {
    return new Post(this.randomOptions());
  }

  public static randomOptions(): PostPropsInterface {
    const createdAt = faker.date.between(new Date('2018/01/01 GMT'), new Date(Date.now()));
    const updatedAt = faker.date.between(createdAt, new Date(Date.now()));
    const authors = UserEntity.all();
    return {
      title: faker.lorem.words(Math.floor((Math.random() * 13) + 3)),
      body: faker.lorem.paragraphs(5),
      createdAt, // created at
      updatedAt, // updated at
      author: getRandomItem(authors),
    };
  }

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
