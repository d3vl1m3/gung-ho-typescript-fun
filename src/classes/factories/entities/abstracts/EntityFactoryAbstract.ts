import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';

export default abstract class EntityFactoryAbstract<T extends CollectionAbstract<U>, U> {
  private readonly _items: object[] = [];

  get items(): object[] {
    return this._items;
  }

  constructor(data: T | U) {
    this._items = this.process(data);
  }

  /**
   * Formatting of the object must be implemented in the child classes
   * @param item
   */
  protected abstract format(item: U): object;

  private processItems(items: T): object[] {
    const data: any[] = [];
    items.items.forEach((item) => {
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
