import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../shared/services/data.service';
import { CountryItemComponent } from './components/country-item/country-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Country } from '../../shared/models/country';
import { RandomCountriesWidgetComponent } from './components/random-countries-widget/random-countries-widget.component';
import { BehaviorSubject, combineLatest, startWith, map } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    AsyncPipe,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    CountryItemComponent,
    RandomCountriesWidgetComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private _dataService = inject(DataService);

  private searchTerm$ = new BehaviorSubject<string>('');

  countries$ = combineLatest([
    this._dataService.getAllCountries().pipe(startWith([] as Country[])),
    this.searchTerm$,
  ]).pipe(
    map(([countries, term]) => {
      const search = term.toLowerCase().trim();
      if (!search) return countries;
      return countries.filter(
        (c) =>
          c.name.toLowerCase().includes(search) || c.countryCode.toLowerCase().includes(search),
      );
    }),
  );

  onSearch(value: string) {
    this.searchTerm$.next(value);
  }
}
