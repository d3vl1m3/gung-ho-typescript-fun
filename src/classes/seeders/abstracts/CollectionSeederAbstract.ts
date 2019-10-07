import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';

export default abstract class CollectionSeederAbstract<T> extends CollectionAbstract<T> {
  constructor(numberToGenerate: number = 5) {
    super();
    this.items = this.generateCollection( numberToGenerate );
  }

  /**
   * Generate an array of <T>s here to be assigned to the Collection extending this class
   * @param {number} amount If a loop is used, use this to control how many will be created
   */
  protected abstract generateCollection(amount: number): T[];
}
