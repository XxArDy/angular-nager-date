import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { CountryInfo } from '../../shared/models/country-info';
import { DataService } from '../../shared/services/data.service';
import { NavigationService } from '../../shared/services/navigation.service';
import { AsyncPipe, CommonModule, LowerCasePipe } from '@angular/common';
import { BordersInfoComponent } from './components/borders-info/borders-info.component';
import { HolidaysListComponent } from './components/holidays-list/holidays-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-country',
  imports: [
    CommonModule,
    AsyncPipe,
    LowerCasePipe,
    BordersInfoComponent,
    HolidaysListComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _dataService = inject(DataService);
  private _navigationService = inject(NavigationService);

  countryInfo$: Observable<CountryInfo> | null = null;

  ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap) => {
      const code = paramMap.get('code');

      if (!code) {
        this._navigationService.goNotFound();
        return;
      }

      this.getCountryInfo(code);
    });
  }

  goBack() {
    this._navigationService.goHome();
  }

  private getCountryInfo(code: string): void {
    this.countryInfo$ = this._dataService.getCountryInfo(code).pipe(
      catchError(() => {
        this._navigationService.goNotFound();
        return [];
      }),
    );
  }
}
