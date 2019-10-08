import {MethodType} from '@/classes/enums/ElementAttributes';
import HtmlElementBuilderAbstract from '@/classes/builders/abstracts/HtmlElementBuilderAbstract';

export default class FormBuilder extends HtmlElementBuilderAbstract<HTMLFormElement> {
  protected readonly _element: HTMLFormElement;

  constructor() {
    super();
    this._element =  document.createElement('form');
  }

  public method(method: MethodType): this {
    this._element.method = method;
    return this;
  }
}
