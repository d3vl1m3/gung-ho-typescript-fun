export default class CollectionAbstract<T> {
  protected items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  public addItem(item: T, key: number|null = null): void {
    if ( key !== null) {
      this.items.splice(key, 0, item);
    } else {
      this.items.push(item);
    }
  }

  public deleteItem(key: number): boolean {
    return delete this.items[key];
  }

  public getItem(key: number): T | boolean {
    return this.items[key] !== undefined
      ? this.items[key]
      : false;
  }

  public getItems(): T[] {
    return this.items;
  }
}
