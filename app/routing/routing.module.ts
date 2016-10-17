import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home }   				from '../components/home/home';
import { Dashboard }   			from '../components/dashboard/dashboard';
import { SalesHistory }   		from '../components/salesHistory/salesHistory';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home',  component: Home },
  { path: 'dashboard',  component: Dashboard },
  { path: 'history',  component: SalesHistory },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}