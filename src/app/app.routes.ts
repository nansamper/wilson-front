import { Routes } from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReserveComponent } from './reserve/reserve.component';

export const routes: Routes = [
  {
    path: '',
    component: ReserveComponent,
  },
  {
    path: 'reservations',
    component: ReservationsComponent,
  },
];
