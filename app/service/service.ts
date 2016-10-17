import { Injectable } from '@angular/core';

import { Today } from './today';
import { TODAY } from './mock-todays';

@Injectable()
export class Service {
	getToday(): Promise<Today> {
		return Promise.resolve(TODAY);
	}
}
