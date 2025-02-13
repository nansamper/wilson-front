export interface Reservation {
  book: string;
  startDate: Date;
  endDate: Date;
  user: string;
  status?: string;
}
