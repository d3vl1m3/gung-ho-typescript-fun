export default class Swimmer {
    public hasSwam: boolean;

    constructor() {
        // initialize value in constructor
        // the constructor is transpiled in a constructor function
        this.hasSwam = false;
    }

    public swim() {
        this.hasSwam = true;
    }
}
