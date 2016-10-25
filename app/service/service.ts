import { Injectable } from '@angular/core';

import { Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Today } from './today';
import { Transaction } 	from './transaction';
import { GraphElement } from './graphElement';

import { WEEKLY }		from './mock-weekly';

@Injectable()
export class Service {

	private baseUrl = 'http://localhost:3000/api/';
 
    constructor(private http: Http) {}

    // Fetch today's stat totals: sales, vists, points
    getToday() : Observable<Today> {
        return this.http.get(this.baseUrl + 'todays-stats')
            .map(toToday)
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Fetch all most recent 10 sales transactions
    getRecentTransactions() : Observable<Transaction[]> {
        return this.http.get(this.baseUrl + 'recent-transactions')
            .map(mapTransactions)
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Fetch all sales transactions
    getTransactions() : Observable<Transaction[]> {
        return this.http.get(this.baseUrl + 'transactions')
            .map(mapTransactions)
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Fetch all sales transactions
    getWeekly() : Observable<GraphElement[]> {
        return this.http.get(this.baseUrl + 'weekly')
            .map(mapWeekly)
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

	// getWeekly(): any {
	// 	return WEEKLY;
	// }
}

function toToday(response:Response) : Today {
	let r = response.json();
	let today = {
		sales: r[0].sales,
		visits: r[0].visits,
		points: r[0].points
	};
   return today;
}

function mapTransactions(response:Response) : Transaction[] {
   return response.json().map(toTransaction);
}

function toTransaction(r:any): Transaction {
  let transaction = <Transaction>({
  	date: r.OrderTime,
	amount: r.SoldAmount,
	points: r.Points,
	reference: r.Reference,
	member: r.FirstName + ' ' + r.LasName,
	card: r.PointCardCode,
	source: r.Remark,
  });
  return transaction;
}

function mapWeekly(response:Response) : GraphElement[] {
   return response.json().map(toGraphElement);
}

function toGraphElement(r:any) : GraphElement {
  let element = <GraphElement>({
  	label: r.label,
  	value: r.value
  });
  return element;
}
