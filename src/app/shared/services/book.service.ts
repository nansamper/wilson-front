import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { AvailableBook } from '../interfaces/available-book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = environment.ApiUrl;

  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.url + '/books');
  }

  getAvailableBooks(): Observable<AvailableBook[]> {
    return this.httpClient.get<AvailableBook[]>(this.url + '/books/available');
  }
}
