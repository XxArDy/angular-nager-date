import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AppRoutes } from './shared/models/app-routes';

export const routes: Routes = [
  {
    path: AppRoutes.HOME,
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: `${AppRoutes.COUNTRY}/:code`,
    loadComponent: () =>
      import('./features/country/country.component').then((m) => m.CountryComponent),
  },
  { path: AppRoutes.NOT_FOUND, component: NotFoundComponent },
  { path: '**', redirectTo: AppRoutes.NOT_FOUND },
];
