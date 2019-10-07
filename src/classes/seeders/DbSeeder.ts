import UserEntityFactory from '@/classes/factories/UserEntityFactory';
import UserEntity from '@/classes/entities/UserEntity';
import UserCollectionSeeder from '@/classes/seeders/UserCollectionSeeder';

import PostEntityFactory from '@/classes/factories/PostEntityFactory';
import PostEntity from '@/classes/entities/PostEntity';
import PostCollectionSeeder from '@/classes/seeders/PostCollectionSeeder';

import Error from '@/classes/models/Error';
import ErrorEntityFactory from '@/classes/factories/ErrorEntityFactory';
import ErrorEntity from '@/classes/entities/ErrorEntity';
import ErrorCollectionSeeder from '@/classes/seeders/ErrorCollectionSeeder';

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
      data: new UserEntityFactory(new UserCollectionSeeder(requiredAmount)).items,
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
      data: new PostEntityFactory(new PostCollectionSeeder(requiredAmount)).items,
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
      data: new ErrorEntityFactory(new ErrorCollectionSeeder(requiredAmount)).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error('Failed to persist error'));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist error', err));
    });
  }
}
