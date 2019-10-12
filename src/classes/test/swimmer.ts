export default class Swimmer {
    public hasSwam: boolean;

    constructor() {
        // initialize value in constructor
        this.hasSwam = false;
    }

    public swim() {
        this.hasSwam = true;
    }
}
