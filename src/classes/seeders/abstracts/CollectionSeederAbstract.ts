import CollectionAbstract from '@/classes/collections/abstracts/CollectionAbstract';

export default abstract class CollectionSeederAbstract<T> extends CollectionAbstract<T> {
  constructor(numberToGenerate: number = 5) {
    super();
    this.items = this.generateRandomCollection( numberToGenerate );
  }

  protected abstract generateRandomCollection(amount: number): T[];
}
