import { inject, Injectable } from '@angular/core';
import { Country } from '../models/country';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Holiday } from '../models/public-holiday';
import { CountryInfo } from '../models/country-info';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _http = inject(HttpClient);

  getAllCountries(): Observable<Country[]> {
    return this._http.get<Country[]>(`${environment.API_URL}/AvailableCountries`);
  }

  getCountryInfo(countryCode: string): Observable<CountryInfo> {
    return this._http.get<CountryInfo>(`${environment.API_URL}/CountryInfo/${countryCode}`);
  }

  getNextHolidays(countryCode: string): Observable<Holiday[]> {
    return this._http.get<Holiday[]>(`${environment.API_URL}/NextPublicHolidays/${countryCode}`);
  }

  getPublicHolidays(countryCode: string, year: number): Observable<Holiday[]> {
    return this._http.get<Holiday[]>(
      `${environment.API_URL}/PublicHolidays/${year}/${countryCode}`,
    );
  }
}
