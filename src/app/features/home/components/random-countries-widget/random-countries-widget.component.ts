import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { Country } from '../../../../shared/models/country';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-random-countries-widget',
  standalone: true,
  imports: [CommonModule, AsyncPipe, MatCardModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './random-countries-widget.component.html',
  styleUrls: ['./random-countries-widget.component.scss'],
})
export class RandomCountriesWidgetComponent {
  private _dataService = inject(DataService);

  randomCountriesData$ = this._dataService.getAllCountries().pipe(
    map((countries) => this.getRandomCountries(countries, 3)),
    switchMap((randomCountries) => {
      const requests = randomCountries.map((country) =>
        this._dataService.getNextHolidays(country.countryCode).pipe(
          map((holidays) => ({
            country,
            holiday: holidays?.[0] || null,
            loading: false,
          })),
          catchError(() =>
            of({
              country,
              holiday: null,
              loading: false,
            }),
          ),
        ),
      );
      return forkJoin(requests);
    }),
  );

  private getRandomCountries(countries: Country[], count: number): Country[] {
    const copy = [...countries];
    const result: Country[] = [];
    while (result.length < count && copy.length) {
      const idx = Math.floor(Math.random() * copy.length);
      result.push(copy.splice(idx, 1)[0]);
    }
    return result;
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
