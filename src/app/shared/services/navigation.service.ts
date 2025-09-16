import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../models/app-routes';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private _router = inject(Router);

  goHome() {
    this._router.navigate([AppRoutes.HOME]);
  }

  goToCountry(code: string) {
    this._router.navigate([AppRoutes.COUNTRY, code]);
  }

  goNotFound() {
    this._router.navigate([AppRoutes.NOT_FOUND]);
  }
}
