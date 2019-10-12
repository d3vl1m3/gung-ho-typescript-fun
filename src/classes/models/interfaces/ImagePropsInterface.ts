import MediaPropsInterface from '@/classes/models/interfaces/MediaPropsInterface';

// @ts-ignore
export default interface ImagePropsInterface extends MediaPropsInterface {
  href: string;
  name: string;
}
