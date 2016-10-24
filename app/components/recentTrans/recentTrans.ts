import { Component, OnInit} from '@angular/core';

import { Transaction }   from '../../service/transaction'
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
    this.getTransactions();
  }

  private getTransactions(): void {
    this.service.getTransactions().subscribe(
      transactions => this.transactions = transactions, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }
}