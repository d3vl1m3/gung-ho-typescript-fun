import HtmlElementBuilderAbstract from '@/classes/builders/abstracts/HtmlElementBuilderAbstract';

export default class LabelBuilder extends HtmlElementBuilderAbstract<HTMLLabelElement> {
  protected readonly _element: HTMLLabelElement;

  constructor() {
    super();
    this._element =  document.createElement('label');
  }
  public text(text: string): this {
    this._element.innerText = text;
    return this;
  }
  public for(name: string): this {
    this._element.setAttribute('for', name);
    return this;
  }
}

