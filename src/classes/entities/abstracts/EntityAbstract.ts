import {Model} from '@vuex-orm/core';
import EntityFieldsInterface from '@/classes/entities/interfaces/EntityFieldsInterface';

export default class EntityAbstract extends Model {
  // todo: revisit how these object are created and see if it can tie in more the the relevant model
  public static fields(): EntityFieldsInterface {
    return {
      id: this.increment(),
    };
  }
}
