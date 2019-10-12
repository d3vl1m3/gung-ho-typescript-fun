export default class Talker {
    public hasTalked: boolean = false;

    // default value which will be overridden in constructor
    protected sound: string = '';

    // constructor can take a config object
    // the same object will be given to all mixins
    constructor(options: {sound: string}) {
        this.sound = options.sound;
    }

    public talk() {
        this.hasTalked = true;
        return this.sound;
    }
}
