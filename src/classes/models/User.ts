import {Item} from '@vuex-orm/core/lib/data';
import UserEntity from '@/classes/entities/UserEntity';
import UserInterface from '@/classes/models/interfaces/UserInterface';

export default class User implements UserInterface {
  private readonly _email: string = '';
  private readonly _name: string = '';
  private readonly _posts: Array<Item<UserEntity>> = [];

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get posts(): Array<Item<UserEntity>> {
    return this._posts;
  }

  constructor(options: UserInterface) {
    this._email = options.email;
    this._name = options.name;
    this._posts = options.posts;
  }

}
