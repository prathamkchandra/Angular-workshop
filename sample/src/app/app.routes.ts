import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // ✅ Always redirect to login on reload
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];
