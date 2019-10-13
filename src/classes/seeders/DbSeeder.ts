import Error from '@/classes/models/Error';
import ErrorCollectionService from '@/classes/services/ErrorCollectionService';
import ErrorEntity from '@/classes/entities/ErrorEntity';
import ErrorEntityFactory from '@/classes/factories/ErrorEntityFactory';

import ImageCollectionService from '@/classes/services/ImageCollectionService';
import ImageEntity from '@/classes/entities/ImageEntity';
import ImageEntityFactory from '@/classes/factories/ImageEntityFactory';

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
    if ( !ImageEntity.query().count() ) {
      DbSeeder.seedImages(7);
    }
    if ( !ErrorEntity.query().count() ) {
      DbSeeder.seedErrors();
    }
  }

  // todo: see if all of theses can be extracted to a single function with config
  private static seedUsers(requiredAmount: number = 5) {
    const collection = new UserCollectionService(requiredAmount);
    UserEntity.insert({
      data: new UserEntityFactory(collection).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error({note: 'Failed to persist users'}));
      }
    }).catch((error) => {
      ErrorEntity.add(new Error({note: 'Failed to persist users', error}));
    });
  }

  private static seedPosts(requiredAmount: number = 5) {
    const collection = new PostCollectionService(requiredAmount);
    PostEntity.insert({
      data: new PostEntityFactory(collection).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error({note: 'Failed to persist posts'}));
      }
    }).catch((error) => {
      ErrorEntity.add(new Error({note: 'Failed to persist posts', error}));
    });
  }

  private static seedImages(requiredAmount: number = 5) {
    const collection = new ImageCollectionService(requiredAmount);
    ImageEntity.insert({
      data: new ImageEntityFactory(collection).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error({note: 'Failed to persist images'}));
      }
    }).catch((error) => {
      ErrorEntity.add(new Error({note: 'Failed to persist images', error}));
    });
  }

  private static seedErrors(requiredAmount: number = 5) {
    const collection = new ErrorCollectionService(requiredAmount);
    ErrorEntity.insert({
      data: new ErrorEntityFactory(collection).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error({note: 'Failed to persist error'}));
      }
    }).catch((error) => {
      ErrorEntity.add(new Error({note: 'Failed to persist error', error}));
    });
  }
}
