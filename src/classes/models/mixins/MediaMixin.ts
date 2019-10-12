// todo: convert this to a mixin
import Author from '@/classes/models/abstracts/Author';
import {compose} from '@/classes/utility/applyMixin';
import Timestamp from '@/classes/models/abstracts/Timestamp';
import MediaInterface from '@/classes/models/interfaces/MediaInterface';

// Create a standard interface pulling in a group of other classes to use as interfaces
interface MediaMixin extends Timestamp {
  // constructor signature the typescript way
  // tslint:disable-next-line:no-misused-new
  new(options?: MediaInterface): MediaMixin;
  (options?: MediaInterface): void;
}




export default compose({}, [Timestamp, Author]) as MediaMixin;
