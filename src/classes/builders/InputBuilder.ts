import HtmlElementBuilderAbstract from '@/classes/builders/abstracts/HtmlElementBuilderAbstract';
import {InputType} from '@/classes/enums/ElementAttributes';
import HtmlDataElementInterface from '@/classes/builders/interfaces/HtmlDataElementInterface';

export default class InputBuilder
    extends HtmlElementBuilderAbstract<HTMLInputElement>
    implements HtmlDataElementInterface {
  protected readonly _element: HTMLInputElement;

  constructor() {
    super();
    this._element =  document.createElement('input');
  }

  public type(type: InputType): InputBuilder {
    this._element.type = type;
    return this;
  }

  public value(value: string): this {
    this._element.value = value;
    return this;
  }

  public name(name: string): this {
    this._element.name = name;
    return this;
  }
}
