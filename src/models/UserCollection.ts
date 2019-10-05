import User from '@/models/User';

export default class UserCollection {
  private items: User[] = [];

  constructor(items: User[]  = []) {
    items.forEach((item) => {
      this.addItem(item);
    });
  }

  public addItem(item: User, key: number | null = null): void {
    if (key !== null) {
      this.items.splice(key, 0, item);
    } else {
      this.items.push(item);
    }
  }

  public deleteItem(key: number): boolean {
    return delete this.items[key];
  }

  public getItem(key: number): User | boolean {
    return this.items[key] !== undefined
      ? this.items[key]
      : false;
  }

  public getItems(): User[]  {
    return this.items;
  }
}
