import CollectionAbstract from '@/models/CollectionAbstract';

export default abstract class EntityFactoryAbstract<T extends CollectionAbstract<U>, U> {

  private _items!: object;

  constructor(data: T | U) {
    this.items = this.process(data);
  }

  get items(): object {
    return this._items;
  }

  set items(value: object) {
    this._items = value;
  }

  protected abstract format(item: U): object;

  private processItems(items: T): object[] {
    const data: any[] = [];
    items.getItems().forEach((item) => {
      data.push(this.format(item));
    });
    return data;
  }
  private process(data: T|U): object[] {
    return data instanceof CollectionAbstract
      ? this.processItems(data)
      : [this.format(data)];
  }
}
