import PostPropsInterface from '@/classes/models/interfaces/PostPropsInterface';
import FormDataModelPropsFactoryAbstract from '@/classes/factories/models/abstracts/FormDataModelPropsFactoryAbstract';
import UserEntity from '@/classes/entities/UserEntity';

export default class FormDataPostModelPropsFactory extends FormDataModelPropsFactoryAbstract<PostPropsInterface> {
  protected _defaultProps: PostPropsInterface = {
    author: null,
    body: '',
    createdAt: new Date(Date.now()),
    title: '',
    updatedAt: new Date(Date.now()),
  };

  protected _customFilters = {
    author: (v: string) => {
      return UserEntity.find(parseInt(v, 10));
    },
  };


}
