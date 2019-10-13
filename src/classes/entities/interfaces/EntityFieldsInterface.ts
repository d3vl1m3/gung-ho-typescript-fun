import Increment from '@vuex-orm/core/lib/attributes/types/Increment';
import Fields from '@vuex-orm/core/lib/model/contracts/Fields';

export default interface EntityFieldsInterface extends Fields {
  id: Increment;
}
