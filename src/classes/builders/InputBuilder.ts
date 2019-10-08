import {InputType} from '@/classes/enums/ElementAttributes';
import HtmlElementBuilderAbstract from '@/classes/builders/abstracts/HtmlElementBuilderAbstract';

export default class InputBuilder extends HtmlElementBuilderAbstract<HTMLInputElement> {
  protected readonly _element: HTMLInputElement;

  constructor() {
    super();
    this._element =  document.createElement('input');
  }

  public type(type: InputType): InputBuilder {
    this._element.type = type;
    return this;
  }
}
