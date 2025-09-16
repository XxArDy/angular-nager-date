import { CommonModule, LowerCasePipe } from '@angular/common';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { CountryInfo } from './../../../../shared/models/country-info';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-borders-info',
  imports: [CommonModule, LowerCasePipe],
  templateUrl: './borders-info.component.html',
  styleUrl: './borders-info.component.scss',
})
export class BordersInfoComponent {
  borders = input<CountryInfo[] | null | undefined>(null);

  private _navigationService = inject(NavigationService);

  onCountryClick(countryCode: string) {
    this._navigationService.goToCountry(countryCode);
  }

  handleKeydown(event: KeyboardEvent, countryCode: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.onCountryClick(countryCode);
    }
  }
}
