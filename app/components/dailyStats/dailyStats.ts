import { Component, OnInit} from '@angular/core';

import { Today }   from '../../service/today';
import { Service }   from '../../service/service';

@Component({
	selector: 'daily-stats',
	templateUrl: 'app/components/dailyStats/dailyStats.html',
	styleUrls: ['app/components/dailyStats/dailyStats.css'],
	providers: [ Service ]
})

export class DailyStats implements OnInit{

  today: Today;

  constructor(private service: Service) { }

   ngOnInit(): void {
    this.service.getToday()
      .then(today => this.today = today);
  }

}