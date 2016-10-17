import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard }   			from '../components/dashboard/dashboard';
import { SalesHistory }   		from '../components/salesHistory/salesHistory';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: Dashboard },
  { path: 'history',  component: SalesHistory },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}