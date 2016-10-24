import { Injectable } from '@angular/core';

import { Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Today } from './today';
import { TODAY } from './mock-todays';

import { Transaction } 	from '../service/transaction';

import { WEEKLY }		from './mock-weekly';

@Injectable()
export class Service {

	private transactionsUrl = 'http://localhost:3000/api/transactions';
 
    constructor(private http: Http) {}

    // Fetch all sales transactions
    getTransactions() : Observable<Transaction[]> {
        return this.http.get(this.transactionsUrl)
            .map(mapTransactions)
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

	getToday(): Promise<Today> {
		return Promise.resolve(TODAY);
	}

	getWeekly(): any {
		return WEEKLY;
	}
}

function mapTransactions(response:Response): Transaction[] {
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
