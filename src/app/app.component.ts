import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { JsonCorreios } from './interfaces/correios';

const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms', style({ opacity: 0 })),
  ]),
]);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
})
export class AppComponent {
  title = 'Rastreamento - Correios';

  currentTracking: JsonCorreios;

  loading: boolean = false;

  constructor() {}

  setCurrentTracking(currentTracking: JsonCorreios) {
    this.currentTracking = currentTracking;
  }

  setLoading(loading: boolean) {
    this.loading = loading;

    if (loading) {
      this.currentTracking = null;
    }
  }
}
