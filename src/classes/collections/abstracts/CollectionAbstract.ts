// todo: figure out a way to abstract a static class.. (getRandomCollection)
export default abstract class CollectionAbstract<T> {
  protected items: T[];

  /**
   *
   * @param {[]|boolean} items Items are applied if passed in but if a bool is parsed, this will decide
   * whether or not to trigger the generateRandomCollectionFunction
   * @param {number} amountToGenerate the amount of random items to generate
   */
  constructor(items: T[]|boolean = [], amountToGenerate: number = 5) {
      this.items = items instanceof Array
        ? items
        : this.generateRandomCollection( items ? amountToGenerate : 0);
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

  protected abstract generateRandomCollection(amount: number): T[];
}
