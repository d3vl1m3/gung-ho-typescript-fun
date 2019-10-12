// todo: convert this to a mixin
import Author from '@/classes/models/traits/Author';
import {compose} from '@/classes/utility/applyMixin';
import Timestamp from '@/classes/models/traits/Timestamp';
import MediaPropsInterface from '@/classes/models/interfaces/fractals/MediaPropsInterface';

// Create a standard interface pulling in a group of other classes to use as interfaces
interface MediaMixin extends Timestamp, Author {
  // constructor signature the typescript way
  // tslint:disable-next-line:no-misused-new
  new(options?: MediaPropsInterface): MediaMixin;
  (options?: MediaMixin): void;
}




export default compose({}, [Timestamp, Author]) as MediaMixin;
