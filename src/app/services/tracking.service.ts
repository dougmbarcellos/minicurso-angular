import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { JsonCorreios } from '../interfaces/correios';

@Injectable()
export class TrackingService {
  urlBase = 'https://tracking-5hr0.onrender.com/api/correios';

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    console.error(error);

    alert(error.message);

    return throwError(() => new Error(error.message));
  }

  track(objectId: string) {
    const apiUrl = `${this.urlBase}/${objectId}`;

    return this.http
      .get<JsonCorreios>(apiUrl)
      .pipe(catchError(this.handleError));
  }
}
