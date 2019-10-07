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
    ]);

    const formatterUsers = new UserEntityFactory(characters).items;

    UserEntity.insert({
      data: formatterUsers,
    });
  }

  private static seedPosts() {
    const posts = new PostCollection([
      new Post('Title 1' , `<p>Lorem ipsum dolor sit amet, <b>consectetur adipisicing elit</b>. Consectetur delectus <s>distinctio</s> earum ipsum molestiae, nobis nulla ratione saepe temporibus vel.</p>`),
      new Post('Title 2' , `<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur dolor eveniet facere molestias mollitia nostrum quaerat quo ratione voluptate.</b>`),
      new Post('Title 3', `<p>Lorem ipsum dolor sit amet, <b>consectetur adipisicing elit</b>. Consectetur delectus <s>distinctio</s> earum ipsum molestiae, nobis nulla ratione saepe temporibus vel.</p>`),
      new Post('Title 4', `<b>Ab at culpa eius, in <blockquote>inventore minima quaerat</blockquote> quisquam quos <s>recusandae sed</s>.</b>`),
    ]);

    const formatterPosts = new PostEntityFactory(posts).items;

    PostEntity.insert({
      data: formatterPosts,
    });
  }
}
