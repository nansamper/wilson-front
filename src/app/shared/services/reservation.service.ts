import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../interfaces/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  url = environment.ApiUrl;

  constructor(private httpClient: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.url + '/reservations');
  }

  newReservation(data: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(this.url + '/reservations', data);
  }

  endReservation(book: string): Observable<Reservation> {
    return this.httpClient.post<Reservation>(
      this.url + '/reservations/return',
      {
        book: book,
      }
    );
  }
}
