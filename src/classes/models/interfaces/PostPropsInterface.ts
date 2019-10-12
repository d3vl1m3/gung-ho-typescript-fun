import MediaPropsInterface from '@/classes/models/interfaces/fractals/MediaPropsInterface';

// @ts-ignore
export default interface PostPropsInterface extends MediaPropsInterface {
  title: string;
  body: string;
}
