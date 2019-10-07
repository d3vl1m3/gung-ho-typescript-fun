import faker from 'faker';
import UserCollection from '@/classes/collections/UserCollection';
import UserEntityFactory from '@/classes/factories/UserEntityFactory';
import User from '@/classes/models/User';
import UserEntity from '@/classes/entities/UserEntity';
import PostCollection from '@/classes/collections/PostCollection';
import Post from '@/classes/models/Post';
import PostEntityFactory from '@/classes/factories/PostEntityFactory';
import PostEntity from '@/classes/entities/PostEntity';

export default class DbSeeder {
  public static init() {
    // Seed users
    UserEntity.insert({
      data: new UserEntityFactory(DbSeeder.getUserCollection()).items,
    });

    // Seed posts
    PostEntity.insert({
      data: new PostEntityFactory(DbSeeder.getFormattedPosts()).items,
    });
  }

  private static getUserCollection(): UserCollection {
    const items = [];

    for ( let i = 0; i < 7; i += 1) {
      items.push(new User(faker.name.findName() , faker.internet.email()));
    }

    return new UserCollection(items);
  }

  private static getFormattedPosts(): PostCollection {
    const authors = UserEntity.all();
    const items = [];

    for ( let i = 0; i < 20; i += 1) {
      const createdAt = faker.date.between(new Date('2018/01/01 GMT'), new Date(Date.now()));
      const updatedAt = faker.date.between(createdAt, new Date(Date.now()));

      items.push( new Post(
        faker.lorem.words(Math.floor((Math.random() * 15) + 1)), // title
        faker.lorem.paragraphs(5), // body
        createdAt, // created at
        updatedAt, // updated at
        getRandomItem(authors),
      ));
    }

    return new PostCollection(items);
  }
}

function getRandomItem(a: any[]) {
  return a[Math.floor(Math.random() * a.length)];
}
