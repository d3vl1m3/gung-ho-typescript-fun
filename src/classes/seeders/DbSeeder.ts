import Error from '@/classes/models/Error';
import ErrorCollectionService from '@/classes/services/ErrorCollectionService';
import ErrorEntity from '@/classes/entities/ErrorEntity';
import ErrorEntityFactory from '@/classes/factories/ErrorEntityFactory';

import PostCollectionService from '@/classes/services/PostCollectionService';
import PostEntity from '@/classes/entities/PostEntity';
import PostEntityFactory from '@/classes/factories/PostEntityFactory';

import UserCollectionService from '@/classes/services/UserCollectionService';
import UserEntity from '@/classes/entities/UserEntity';
import UserEntityFactory from '@/classes/factories/UserEntityFactory';

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
      data: new UserEntityFactory(new UserCollectionService(requiredAmount)).items,
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
      data: new PostEntityFactory(new PostCollectionService(requiredAmount)).items,
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
      data: new ErrorEntityFactory(new ErrorCollectionService(requiredAmount)).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error('Failed to persist error'));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist error', err));
    });
  }
}
