import PropsInterface from '@/classes/models/interfaces/PropsInterface';

export default abstract class FormDataModelPropsFactoryAbstract<T extends PropsInterface> {

  /**
   * Any props not parsed in from the form will be filled with the default props from here
   */
  protected abstract _defaultProps: T;

  /**
   * An object of field names with custom filter functions as the values
   */
  protected abstract _customFilters: {[fieldName: string]: (fieldValue: string) => any};

  private _props: T|null = null;
  private _form: HTMLFormElement;

  get props(): T {
    return this._props ? this._props : this.generateProps();
  }

  constructor(options: {form: HTMLFormElement}) {
    this._form = options.form;
  }

  private generateProps(): T {
    const elements = this._form.elements;
    const items: {[index: string]: any} = {};
    for ( const name of Object.keys(this._defaultProps) ) {
      const element = elements.namedItem(name) as HTMLInputElement;
      if ( element ) {
        const value = element.value;
        // apply a custom filter to a field if one exist
        items[name] =  typeof this._customFilters[name] === 'function'
            ? this._customFilters[name](value)
            : value;
      }
    }
    return this._props = {...this._defaultProps, ...items};
  }
}
