import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';
import { Book } from '../shared/interfaces/book';
import { BookService } from '../shared/services/book.service';
import { Reservation } from '../shared/interfaces/reservation';
import { ReservationService } from '../shared/services/reservation.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reservations',
  imports: [AngularMaterialModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent implements OnInit {
  books: Book[] = [];
  reservations: Reservation[] = [];

  displayedColumns: string[] = [
    'startDate',
    'endDate',
    'status',
    'user',
    'book',
    'actions',
  ];
  dataSource!: MatTableDataSource<Reservation>;

  constructor(
    private bookService: BookService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.getBooks();
    this.getReservations();
  }

  getBooks() {
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    });
  }

  getReservations() {
    this.reservationService.getReservations().subscribe((response) => {
      this.reservations = response;
      this.dataSource = new MatTableDataSource(this.reservations);
    });
  }

  endReservation(book: string) {
    this.reservationService.endReservation(book).subscribe((response) => {
      this.getReservations();
    });
  }
}
