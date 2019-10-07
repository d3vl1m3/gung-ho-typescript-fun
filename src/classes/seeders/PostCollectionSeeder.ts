import CollectionSeederAbstract from '@/classes/seeders/abstracts/CollectionSeederAbstract';
import faker from 'faker';
import Post from '@/classes/models/Post';
import UserEntity from '@/classes/entities/UserEntity';

export default class PostCollectionSeeder extends CollectionSeederAbstract<Post> {
  protected generate(amount: number): Post[] {
    const authors = UserEntity.all();
    const items = [];
    for ( let i = 0; i < amount; i += 1) {
      const createdAt = faker.date.between(new Date('2018/01/01 GMT'), new Date(Date.now()));
      const updatedAt = faker.date.between(createdAt, new Date(Date.now()));

      items.push( new Post(
        faker.lorem.words(Math.floor((Math.random() * 13) + 3)), // title
        faker.lorem.paragraphs(5), // body
        createdAt, // created at
        updatedAt, // updated at
        getRandomItem(authors),
      ));
    }

    return items;
  }
}

function getRandomItem(a: any[]) {
  return a[Math.floor(Math.random() * a.length)];
}
