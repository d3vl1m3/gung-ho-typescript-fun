import {Attr} from '@vuex-orm/core';
import EntityAbstract from '@/classes/entities/abstracts/EntityAbstract';
import Increment from '@vuex-orm/core/lib/attributes/types/Increment';

export default class TimeStampEntityAbstract extends EntityAbstract {
  public static fields(): {id: Increment, createdAt: Attr, updatedAt: Attr} {
    return {
      ...super.fields(),
      ...{
        createdAt: this.attr(null),
        updatedAt: this.attr(null),
      },
    };
  }
}
