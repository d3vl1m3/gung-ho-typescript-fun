export default abstract class HtmlElementBuilderAbstract <U extends HTMLElement> {
  protected readonly abstract _element: U;

  public class(classes: string): this {
    const classArray = classes.split(' ');
    classArray.forEach((item) => this._element.classList.add(item));
    return this;
  }

  public id(id: string): this {
    this._element.id = id;
    return this;
  }

  public data(label: string, value: string): this {
    this._element.setAttribute('data' + label, value);
    return this;
  }

  public append(elem: HTMLElement): this {
    this._element.append(elem);
    return this;
  }

  public generate(): U {
    return this._element;
  }
}
