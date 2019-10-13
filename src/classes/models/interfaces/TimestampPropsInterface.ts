import PropsInterface from '@/classes/models/interfaces/PropsInterface';

export default interface TimestampPropsInterface extends PropsInterface {
  updatedAt: Date;
  createdAt: Date;
}
