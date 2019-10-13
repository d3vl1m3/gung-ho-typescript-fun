import CollectionServiceAbstract from '@/classes/services/abstracts/CollectionServiceAbstract';
import faker from 'faker';
import Image from '@/classes/models/Image';
import UserEntity from '@/classes/entities/UserEntity';

export default class ImageCollectionService extends CollectionServiceAbstract<Image> {
  protected generate(amount: number): Image[] {
    const authors = UserEntity.all();
    const items = [];
    for ( let i = 0; i < amount; i += 1) {
      const createdAt = faker.date.between(new Date('2018/01/01 GMT'), new Date(Date.now()));
      const updatedAt = faker.date.between(createdAt, new Date(Date.now()));

      items.push( new Image({
        name: faker.lorem.words(Math.floor((Math.random() * 2) + 3)),
        href: faker.internet.url() + '/test.png',
        createdAt, // created at
        updatedAt, // updated at
        author: getRandomItem(authors),
      }));
    }

    return items;
  }
}

function getRandomItem(a: any[]) {
  return a[Math.floor(Math.random() * a.length)];
}
