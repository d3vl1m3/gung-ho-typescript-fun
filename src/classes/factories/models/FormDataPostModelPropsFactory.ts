import PostPropsInterface from '@/classes/models/interfaces/PostPropsInterface';
import FormDataModelPropsAbstract from '@/classes/factories/models/abstracts/FormDataModelPropsAbstract';

export default class FormDataPostModelPropsFactory extends FormDataModelPropsAbstract<PostPropsInterface> {
  protected requiredFormFields(): string[] {
    return [
      'author',
      'title',
      'body',
    ];
  }
}
