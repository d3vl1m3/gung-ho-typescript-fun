import { Model } from '@vuex-orm/core';
import Posts from '@/models/Posts';

export default class Users extends Model {

  // This is the name used as module name of the Vuex Store.
  public static entity = 'users';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  public static fields() {
    return {
      id: this.attr(null),
      name: this.attr(''),
      email: this.attr(''),
      posts: this.hasMany(Posts, 'user_id'),
    };
  }

  /**
   * Enables auto-complete in IDEs
   */
  public id!: number|null;
  public name!: string;
  public email!: string;
  public posts!: Posts[];
}
