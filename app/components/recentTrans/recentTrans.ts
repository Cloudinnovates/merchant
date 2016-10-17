import { Component, OnInit} from '@angular/core';

import { Transaction }   from '../../service/transaction';
import { Service }       from '../../service/service';

@Component({
	selector: 'recent-trans',
	templateUrl: 'app/components/recentTrans/recentTrans.html',
	styleUrls: ['app/components/recentTrans/recentTrans.css'],
	providers: [ Service ]
})

export class RecentTrans implements OnInit{

  transactions: Transaction[];

  constructor(private service: Service) { }

   ngOnInit(): void {
    this.service.getRecentTrans()
      .then(transctions => this.transactions = transctions);
  }
}