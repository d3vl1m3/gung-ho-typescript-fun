import {Model} from '@vuex-orm/core';

export default class EntityAbstract extends Model {

  public static fields() {
    return {
      id: this.increment(),
    };
  }
}
