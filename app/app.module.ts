import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './components/app.component';
import { Home }   		    from './components/home/home';
import { Dashboard }   	  from './components/dashboard/dashboard';
import { Header }   	    from './components/header/header';
import { RdWidget }   	  from './components/rd-widget/rd-widget';
import { RdWidgetBody }   from './components/rd-widget-body/rd-widget-body';

import { AppRoutingModule } from './routing/routing.module';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
  	],
  	declarations: [
  		AppComponent,
  		Home,
  		Dashboard,
  		Header,
  		RdWidget,
  		RdWidgetBody
  	],
  	bootstrap: [
  		AppComponent
  	]
})

export class AppModule { }
