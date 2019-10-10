import Swimmer from '@/classes/test/swimmer';
import Walker from '@/classes/test/walker';
import Talker from '@/classes/test/talker';

export default interface Penguin extends Swimmer, Walker, Talker {
}
