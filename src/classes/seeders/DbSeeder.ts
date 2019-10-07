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
    DbSeeder.seedUsers();
    DbSeeder.seedPosts();
  }

  private static seedUsers() {
    const characters = new UserCollection([
      new User('Liam' , 'Liam@here.com'),
      new User('Beth' , 'Beth@here.com'),
      new User('Tara', 'Tara@here.com'),
      new User('Frank', 'Frank@here.com'),
      new User('Harold', 'Harold@here.com'),
      new User('Jenny', 'Jenny@here.com'),
    ]);

    const formatterUsers = new UserEntityFactory(characters).items;

    UserEntity.insert({
      data: formatterUsers,
    });
  }

  private static seedPosts() {

    const date = new Date(Date.now());
    const authors = UserEntity.all();

    const items = [];

    for ( let i = 0; i < 20; i += 1) {
      items.push( new Post(
        'Title ' + i ,
        '<p>Lorem ipsum dolor sit amet, <b>consectetur adipisicing elit</b>. Consectetur delectus <s>distinctio</s> earum ipsum molestiae, nobis nulla ratione saepe temporibus vel.</p>',
        date,
        date,
        getRandomItem(authors),
      ));
    }

    const posts = new PostCollection(items);

    const formatterPosts = new PostEntityFactory(posts).items;

    PostEntity.insert({
      data: formatterPosts,
    });
  }
}

function getRandomItem(a: any[]) {
  return a[Math.floor(Math.random() * a.length)];
}
