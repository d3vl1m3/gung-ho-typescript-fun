import {Model} from '@vuex-orm/core';

export default class EntityAbstract extends Model {
  // todo: revisit how these object are created and see if it can tie in more the the relevant model
  public static fields() {
    return {
      id: this.increment(),
    };
  }
}
