/**
 * Copy properties of source object to target object excluding constructor.
 * If a property with the same exists on the target it is NOT overwritten.
 *
 * @param target
 * @param source
 */

export function extend(target: any = {}, source: any = []): void {
    Object.getOwnPropertyNames(source).forEach( (name) => {
        if (name !== 'constructor' && !target.hasOwnProperty(name)) {
            // @ts-ignore
            Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(source, name));
        }
    });
}


/**
 * Create a constructor function for a class implementing the given mixins.
 *
 * @param defaultOptions options that will be used if some options are missing at construction time
 * @param mixins array of classes to be mixed together. The constructor of those classes will receive the options given
 *               to the constructor of the composed object
 * @returns {new(any): {}} a constructor function
 */
export function compose(defaultOptions: any, mixins: any[]) {

    // our constructor function that will be called every time a new composed object is created
    const tor = (options: any) => {
            const o = {};
            // clone options given to the constructor
            if (options) {
                extend(o, options);
            }
            // complete with the defaultOptions
            if (defaultOptions) {
                extend(o, defaultOptions);
            }

            // call the constructor function of all the mixins
            mixins.forEach((mixin) => {
              mixin.call(this, o);
            });
        };

    // add all mixins properties and methods to the constructor prototype for all
    // created objects to have them
    mixins.forEach((mixin) => {
        extend(tor.prototype, mixin.prototype);
    });

    return tor;
}
