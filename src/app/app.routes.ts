import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home',  canActivate: [AuthService], loadChildren: () => import('../app/home/home/home-routing').then(x => x.HomeRouting) },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
