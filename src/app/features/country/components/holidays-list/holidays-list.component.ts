import { Component, inject, Input, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from '../../../../shared/models/public-holiday';
import { DataService } from '../../../../shared/services/data.service';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-holidays-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, DatePipe, MatTableModule, MatButtonModule],
  templateUrl: './holidays-list.component.html',
  styleUrl: './holidays-list.component.scss',
})
export class HolidaysListComponent {
  private _dataService = inject(DataService);

  currentYear = signal(new Date().getFullYear());
  holidays$: Observable<Holiday[]> | null = null;
  countryCodeValue: string | null = null;

  displayedColumns = ['date', 'localName', 'name', 'type'];

  @Input() set countryCode(value: string | null) {
    this.countryCodeValue = value;
    if (value) {
      this.getHolidays(value);
    }
  }

  getHolidays(code: string) {
    this.holidays$ = this._dataService.getPublicHolidays(code, this.currentYear());
  }

  changeYear(year: number) {
    this.currentYear.set(year);
    if (this.countryCodeValue) {
      this.getHolidays(this.countryCodeValue);
    }
  }

  yearsRange(): number[] {
    return Array.from({ length: 11 }, (_, i) => 2020 + i);
  }
}
