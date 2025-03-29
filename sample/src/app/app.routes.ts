import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect default route to login
  { path: 'login', component: LoginComponent }, // Login Page
  { path: 'dashboard', component: DashboardComponent } // Dashboard Page
];
