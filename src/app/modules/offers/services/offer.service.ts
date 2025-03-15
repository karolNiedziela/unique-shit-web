import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfferFilters } from '../models/offer-filters';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private offersEndpoint: string = `${environment.apiUrl}/offers`;

  private defaultHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getFilters(): Observable<OfferFilters> {
    return this.http.get<OfferFilters>(
      `${this.offersEndpoint}/filters`,
      this.defaultHttpOptions
    );
  }
}
