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

  private static seedUsers(requiredAmount: number = 5) {
    const userCollection = new UserCollectionService(requiredAmount);
    UserEntity.insert({
      data: new UserEntityFactory(userCollection).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error('Failed to persist users'));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist users', err));
    });
  }

  private static seedPosts(requiredAmount: number = 5) {
    const postCollection = new PostCollectionService(requiredAmount);
    PostEntity.insert({
      data: new PostEntityFactory(postCollection).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error('Failed to persist posts'));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist posts', err));
    });
  }

  private static seedImages(requiredAmount: number = 5) {
    const imageCollection = new ImageCollectionService(requiredAmount);
    ImageEntity.insert({
      data: new ImageEntityFactory(imageCollection).items,
    }).then((ref) => {
      if ( !ref ) {
        ErrorEntity.add(new Error('Failed to persist images'));
      }
    }).catch((err) => {
      ErrorEntity.add(new Error('Failed to persist images', err));
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
