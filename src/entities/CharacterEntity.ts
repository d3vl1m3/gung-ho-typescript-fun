import { Model } from '@vuex-orm/core';
import {Sex} from '@/enum/Sex';

export default class CharacterEntity extends Model {
  public static entity = 'characters';

  public static fields() {
    return {
      id: this.increment(),
      name: this.attr(null),
      sex: this.attr(Sex.NONE),
    };
  }
}
