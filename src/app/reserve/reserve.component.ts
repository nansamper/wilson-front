import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvailableBook } from '../shared/interfaces/available-book';
import { ReservationService } from '../shared/services/reservation.service';
import { Reservation } from '../shared/interfaces/reservation';
import { AngularMaterialModule } from '../shared/modules/angular-material/angular-material.module';
import { BookService } from '../shared/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve',
  imports: [AngularMaterialModule],
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.scss',
})
export class ReserveComponent {
  availableBooks: AvailableBook[] = [];
  formGroup!: FormGroup;

  get form() {
    return this.formGroup.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      book: ['', Validators.required],
      description: ['', Validators.required],
      user: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
    this.getAvailableBooks();
  }

  getAvailableBooks() {
    this.bookService.getAvailableBooks().subscribe((response) => {
      this.availableBooks = response;
    });
  }

  submit() {
    const request: Reservation = {
      startDate: this.form['startDate'].value,
      endDate: this.form['endDate'].value,
      book: this.form['book'].value,
      user: this.form['user'].value,
    };

    this.reservationService.newReservation(request).subscribe((response) => {
      this.router.navigate(['/reservations']);
    });
  }
}
