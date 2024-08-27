import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (mod) => mod.DashboardComponent
      ),
  },
];
