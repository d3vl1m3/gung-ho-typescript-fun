import Fields from '@vuex-orm/core/lib/model/contracts/Fields';
import Increment from '@vuex-orm/core/lib/attributes/types/Increment';

export default interface EntityFieldsInterface extends Fields {
  id: Increment;
}
