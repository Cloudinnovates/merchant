"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var nvD3Module_1 = require('./nvD3Module');
var app_component_1 = require('./components/app.component');
var dashboard_1 = require('./components/dashboard/dashboard');
var header_1 = require('./components/header/header');
var dailyStats_1 = require('./components/dailyStats/dailyStats');
var recentTrans_1 = require('./components/recentTrans/recentTrans');
var salesHistory_1 = require('./components/salesHistory/salesHistory');
var graph_1 = require('./components/graph/graph');
var routing_module_1 = require('./routing/routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                nvD3Module_1.nvD3Module
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_1.Dashboard,
                header_1.Header,
                dailyStats_1.DailyStats,
                recentTrans_1.RecentTrans,
                salesHistory_1.SalesHistory,
                graph_1.Graph
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map