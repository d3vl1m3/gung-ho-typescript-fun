// todo: convert this to a mixin
import Author from '@/classes/models/traits/Author';
import {compose} from '@/classes/utility/applyMixin';
import MediaPropsInterface from '@/classes/models/interfaces/MediaPropsInterface';
import Timestamp from '@/classes/models/traits/Timestamp';

// Create a standard interface pulling in a group of other classes to use as interfaces
interface MediaMixin extends Author, Timestamp {
  // constructor signature the typescript way
  // tslint:disable-next-line:no-misused-new
  new(options?: MediaPropsInterface): MediaMixin;
  (options?: MediaMixin): void;
}




export default compose({}, [Author, Timestamp]) as MediaMixin;
