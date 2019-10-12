import {Item} from '@vuex-orm/core/lib/data';
import UserPropsInterface from '@/classes/models/interfaces/UserPropsInterface';
import PostEntity from '@/classes/entities/PostEntity';

export default class User {
  private readonly _email: string = '';
  private readonly _name: string = '';
  private readonly _posts: Array<Item<PostEntity>>|null = [];

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get posts(): Array<Item<PostEntity>> | null {
    return this._posts;
  }

  constructor(options: UserPropsInterface) {
    this._email = options.email;
    this._name = options.name;
    this._posts = options.posts ? options.posts  : null;
  }

}
