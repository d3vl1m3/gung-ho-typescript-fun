import { Model } from '@vuex-orm/core';
import Users from './Users';

export default class Posts extends Model {
  public static entity = 'posts';

  // `this.belongsTo` is for belongs to relationship. The first argument is
  // the Model class, and second is the field name for the foreign key.
  public static fields() {
    return {
      id: this.attr(null),
      user_id: this.attr(null),
      title: this.attr(''),
      body: this.attr(''),
      published: this.attr(false),
      author: this.belongsTo(Users, 'user_id'),
    };
  }
}
