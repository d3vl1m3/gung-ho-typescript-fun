import UserCollection from '@/classes/collections/UserCollection';
import UserEntityFactory from '@/classes/factories/UserEntityFactory';
import UserEntity from '@/classes/entities/UserEntity';
import PostCollection from '@/classes/collections/PostCollection';
import PostEntityFactory from '@/classes/factories/PostEntityFactory';
import PostEntity from '@/classes/entities/PostEntity';
import ErrorEntity from '@/classes/entities/ErrorEntity';
import ErrorEntityFactory from '@/classes/factories/ErrorEntityFactory';
import ErrorCollection from '@/classes/collections/ErrorCollection';
import Error from '@/classes/models/Error';

export default class DbSeeder {
  public static init() {
    // Only populate an empty DB
    if ( !UserEntity.query().count() ) {
      DbSeeder.seedUsers(7);
    }
    if ( !PostEntity.query().count() ) {
      DbSeeder.seedPosts(20);
    }
    if ( !ErrorEntity.query().count() ) {
      DbSeeder.seedErrors();
    }
  }

  private static seedUsers(requiredAmount: number = 5) {
    UserEntity.insert({
      data: new UserEntityFactory(UserCollection.getRandomCollection(requiredAmount)).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error('Failed to persist users'));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist users', err));
    });
  }

  private static seedPosts(requiredAmount: number = 5) {
    PostEntity.insert({
      data: new PostEntityFactory(PostCollection.getRandomCollection(requiredAmount)).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error('Failed to persist posts'));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist posts', err));
    });
  }

  private static seedErrors(requiredAmount: number = 5) {
    ErrorEntity.insert({
      data: new ErrorEntityFactory(ErrorCollection.getRandomCollection(requiredAmount)).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error('Failed to persist error'));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist error', err));
    });
  }
}
