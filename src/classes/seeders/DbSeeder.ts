import faker from 'faker';
import UserCollection from '@/classes/collections/UserCollection';
import UserEntityFactory from '@/classes/factories/UserEntityFactory';
import User from '@/classes/models/User';
import UserEntity from '@/classes/entities/UserEntity';
import PostCollection from '@/classes/collections/PostCollection';
import Post from '@/classes/models/Post';
import PostEntityFactory from '@/classes/factories/PostEntityFactory';
import PostEntity from '@/classes/entities/PostEntity';
import ErrorEntity from '@/classes/entities/ErrorEntity';
import ErrorEntityFactory from '@/classes/factories/ErrorEntityFactory';
import ErrorCollection from '@/classes/collections/ErrorCollection';
import Error from '@/classes/models/Error';

export default class DbSeeder {
  public static init() {
    DbSeeder.seedUsers(7);
    DbSeeder.seedPosts(20);
    DbSeeder.seedErrors();
  }

  private static seedUsers(requiredAmount: number = 5) {
    // Seed users
    UserEntity.insert({
      data: new UserEntityFactory(DbSeeder.getRandomUserCollection(requiredAmount)).items,
    }).then((ref) => {
      if ( !!ref ) {
        ErrorEntity.add(new Error('Failed to persist users', false));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist users', false, err));
    });
  }

  private static seedPosts(requiredAmount: number = 5) {
    // Seed posts
    PostEntity.insert({
      data: new PostEntityFactory(DbSeeder.getRandomPostCollection(requiredAmount)).items,
    }).then((ref) => {
      if ( !!ref ) {
        ErrorEntity.add(new Error('Failed to persist posts', false));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist posts', false, err));
    });
  }

  private static seedErrors(requiredAmount: number = 5) {
    // Seed users
    ErrorEntity.insert({
      data: new ErrorEntityFactory(DbSeeder.getRandomErrorCollection(requiredAmount)).items,
    }).then((ref) => {
      if ( !!ref ) {
        ErrorEntity.add(new Error('Failed to persist error', false));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist error', false, err));
    });
  }

  private static getRandomUserCollection(amount: number = 5): UserCollection {
    const items = [];

    for ( let i = 0; i < amount; i += 1) {
      items.push(new User(faker.name.findName() , faker.internet.email()));
    }

    return new UserCollection(items);
  }

  private static getRandomPostCollection(amount: number = 5): PostCollection {
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

    return new PostCollection(items);
  }

  private static getRandomErrorCollection(amount: number = 5): ErrorCollection {
    const items = [];

    for ( let i = 0; i < amount; i += 1) {
      items.push(new Error(
        faker.lorem.words(Math.floor((Math.random() * 13) + 3)),
        true,
        'ERR: ' + faker.lorem.words(Math.floor((Math.random() * 13) + 3)),
      ));
    }

    return new ErrorCollection(items);
  }
}

function getRandomItem(a: any[]) {
  return a[Math.floor(Math.random() * a.length)];
}
