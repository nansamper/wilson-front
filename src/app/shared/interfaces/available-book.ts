import { Book } from './book';

export interface AvailableBook extends Book {
  endDate: string;
  available: boolean;
}
