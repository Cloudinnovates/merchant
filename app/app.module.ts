import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './components/app.component';
import { Home }   		    from './components/home/home';
import { Dashboard }   	  from './components/dashboard/dashboard';
import { Header }   	    from './components/header/header';
import { DailyStats }         from './components/dailyStats/dailyStats';

import { AppRoutingModule } from './routing/routing.module';
import { Service }          from './service/service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './service/in-memory-data.service';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
    HttpModule
  	],
  	declarations: [
  		AppComponent,
  		Home,
  		Dashboard,
  		Header,
  		DailyStats
  	],
  	bootstrap: [
  		AppComponent
  	],
    // providers: [
    //   Service
    // ]
})

export class AppModule { }
