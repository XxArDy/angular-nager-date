import { Component, input } from '@angular/core';
import { Country } from '../../../../shared/models/country';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-country-item',
  imports: [LowerCasePipe],
  templateUrl: './country-item.component.html',
  styleUrl: './country-item.component.scss',
})
export class CountryItemComponent {
  country = input<Country>();
}
