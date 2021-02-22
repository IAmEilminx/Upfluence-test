import { SocialPost } from './social-post.model';
export const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday',
  'thursday', 'friday', 'saturday'];

export type WeekDay = 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

export interface Day {
  dayName: WeekDay;
  hours: Array<Array<SocialPost>>;
}