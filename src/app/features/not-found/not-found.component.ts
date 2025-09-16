import { Component, inject } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-not-found',
  imports: [MatButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  private _navigationService = inject(NavigationService);

  goHome() {
    this._navigationService.goHome();
  }
}
