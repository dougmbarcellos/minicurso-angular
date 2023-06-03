import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, of } from 'rxjs';
import { JsonCorreios } from '../../interfaces/correios';
import { TrackingService } from '../../services/tracking.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],
})
export class TrackingComponent implements OnInit {
  @Output()
  onNewTrack = new EventEmitter<JsonCorreios>();

  @Output()
  onLoadingChange = new EventEmitter<boolean>();

  constructor(private trackingService: TrackingService) {}

  ngOnInit() {}

  track(objectId: string) {
    if (!objectId) {
      alert('Informe o código de rastreamento.');
      return;
    }

    this.onLoadingChange.emit(true);

    this.trackingService
      .track(objectId)
      .pipe(
        catchError(() => {
          this.onLoadingChange.emit(false);

          return of();
        })
      )
      .subscribe((result) => {
        this.onNewTrack.emit(result);

        this.onLoadingChange.emit(false);
      });
  }
}
