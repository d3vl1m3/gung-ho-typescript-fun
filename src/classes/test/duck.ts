import Swimmer from '@/classes/test/swimmer';
import Talker from '@/classes/test/talker';
import Walker from '@/classes/test/walker';
import {compose} from '@/classes/test/class-composer';


interface IDuck extends Swimmer, Walker, Talker {
    // constructor signature the typescript way
    // tslint:disable-next-line:no-misused-new
    new(options?: DuckConstructorOptions): IDuck;
    (options?: DuckConstructorOptions): void;
}

interface DuckConstructorOptions {
    sound: string;
}

const iDuck = compose({sound: 'coin'}, [Swimmer, Walker, Talker]) as IDuck;

// Duck class can add any custom methods
export default class Duck extends iDuck {

    public hasQuacked = false;
    constructor(options: DuckConstructorOptions) {
        super(options);
    }

    public quack() {
        this.hasQuacked = true;
    }
}
