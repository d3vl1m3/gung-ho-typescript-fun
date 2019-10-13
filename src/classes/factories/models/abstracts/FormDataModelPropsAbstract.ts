import PropsInterface from '@/classes/models/interfaces/PropsInterface';

export default abstract class FormDataModelPropsAbstract<T extends PropsInterface> {
  private _form: HTMLFormElement;
  private readonly _props: T|null = null;

  get props(): T|null {
    return this._props;
  }

  constructor(options: {form: HTMLFormElement}) {
    this._form = options.form;
    if ( this.hasRequiredFields() ) {
      this._props = this.generateProps();
    }
  }

  protected abstract requiredFormFields(): string[];

  private hasRequiredFields(): boolean {
    const elements = this._form.elements;
    for ( const requiredFormField of this.requiredFormFields() ) {
      if ( !elements.namedItem(requiredFormField) ) {
        return false;
      }
    }
    return true;
  }

  private generateProps() {
    const elements = this._form.elements;
    const items: {[index: string]: any} = {};
    for ( const requiredFormField of this.requiredFormFields() ) {
      const element = !!elements.namedItem(requiredFormField);
      if ( element ) {
        items[requiredFormField] = element.valueOf();
      }
    }
    return items as T;
  }
}
