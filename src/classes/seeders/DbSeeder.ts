import UserCollection from '@/collections/UserCollection';
import UserEntityFactory from '@/factories/UserEntityFactory';
import User from '@/models/User';
import UserEntity from '@/entities/UserEntity';

export default class DbSeeder {

  public static init() {
    DbSeeder.seedCharacters();
  }

  private static seedCharacters() {
    const characters = new UserCollection([
      new User('Liam' , 'Liam@here.com'),
      new User('Beth' , 'Beth@here.com'),
      new User('Tara', 'Tara@here.com'),
      new User('Frank', 'Frank@here.com'),
    ]);

    UserEntity.insert({
      data: new UserEntityFactory(characters).items,
    });
  }
}
