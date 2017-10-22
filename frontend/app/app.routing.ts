import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes = RouterModule.forRoot([
    { path: '',  pathMatch:'full', redirectTo: '/home' },
    { path: 'home',  component: HomeComponent }
]);

export const components = [ HomeComponent, DashboardComponent ];
