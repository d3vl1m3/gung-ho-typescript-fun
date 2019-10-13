import PostPropsInterface from '@/classes/models/interfaces/PostPropsInterface';
import FormDataModelPropsFactoryAbstract from '@/classes/factories/models/abstracts/FormDataModelPropsFactoryAbstract';
import TimestampPropsInterface from '@/classes/models/interfaces/TimestampPropsInterface';
import Post from '@/classes/models/Post';

export default class FormDataPostModelPropsFactory extends FormDataModelPropsFactoryAbstract<PostPropsInterface> {
  protected _requiredFormFields: string[] = [
    'author',
    'title',
    'body',
  ];

  protected _additionalProps: TimestampPropsInterface = {
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  };

  protected _requiredProps: PostPropsInterface = Post.randomOptions();

}
