import Duck from '@/classes/test/duck';

export class MyApp {
    public duck: Duck;

    constructor() {
        this.duck = new Duck({sound: 'puiock'}) as Duck;
    }

    public manageDuck() {
        console.log(this.duck.talk());
    }
}
