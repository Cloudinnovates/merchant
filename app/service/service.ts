import { Injectable } from '@angular/core';

import { Today } from './today';
import { TODAY } from './mock-todays';

import { Transaction } 	from './transaction';
import { TRANSACTIONS } from './mock-transactions';

import { WEEKLY }		from './mock-weekly';

@Injectable()
export class Service {

	getToday(): Promise<Today> {
		return Promise.resolve(TODAY);
	}

	getRecentTrans(): Promise<Transaction[]> {
		return Promise.resolve(TRANSACTIONS);
	}

	getWeekly(): any {
		return WEEKLY;
	}
}
