import Swimmer from '@/classes/mixin-example/swimmer';
import Talker from '@/classes/mixin-example/talker';
import Walker from '@/classes/mixin-example/walker';
import {compose} from '@/classes/utility/applyMixin';


// Create a standard interface pulling in a group of other classes to use as interfaces
interface IDuck extends Swimmer, Walker, Talker {
    // constructor signature the typescript way
    // tslint:disable-next-line:no-misused-new
    new(options?: DuckConstructorOptions): IDuck;
    (options?: DuckConstructorOptions): void;
}

/*
  Compose will create an object that contains all the props and values of the parsed classes.
  It will also trigger the construct function on each of them so the props are correct.

  The `as iDuck` declaration will typecast the function to match the `iDuck` interface. This
  is so the constructor in `Duck' is aware of what type the constructor is expecting to receive.

  All of the above assures accurate linting in your IDEs
 */
const iDuck = compose({sound: 'coin'}, [Swimmer, Walker, Talker]) as IDuck;

// Duck class can add any custom methods
export default class Duck extends iDuck {

    public hasQuacked = false;
    constructor(options: DuckConstructorOptions) {
        super(options);
        this.sound = 'quack';
    }

    public quack() {
        this.hasQuacked = true;
    }

    // add additional functionality to the mixins method before calling and returning it
    public talk(): string {
      this.quack();
      return super.talk();
    }
}

// just for semantics but should contain all the relevant properties required by the extended mixins
interface DuckConstructorOptions {
  sound?: string;
}
