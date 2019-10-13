// @ts-ignore
import PropsInterface from '@/classes/models/interfaces/PropsInterface';

export default interface ErrorPropsInterface extends PropsInterface {
  note: string;
  error?: string;
}
