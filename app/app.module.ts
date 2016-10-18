import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { nvD3Module }    from './nvD3Module'

import { AppComponent }   from './components/app.component';
import { Dashboard }   	  from './components/dashboard/dashboard';
import { Header }   	    from './components/header/header';
import { DailyStats }     from './components/dailyStats/dailyStats';
import { RecentTrans }    from './components/recentTrans/recentTrans';
import { SalesHistory }   from './components/salesHistory/salesHistory';
import { Graph }          from './components/graph/graph';

import { AppRoutingModule } from './routing/routing.module';
import { Service }          from './service/service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './service/in-memory-data.service';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
    HttpModule,
    nvD3Module
  	],
  	declarations: [
  		AppComponent,
  		Dashboard,
  		Header,
  		DailyStats,
      RecentTrans,
      SalesHistory,
      Graph
  	],
  	bootstrap: [
  		AppComponent
  	],
    // providers: [
    //   Service
    // ]
})

export class AppModule { }
