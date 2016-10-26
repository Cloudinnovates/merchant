import { Component, OnInit} from '@angular/core';

import { Stat }   from '../../service/stat';
import { Service }   from '../../service/service';

@Component({
	selector: 'daily-stats',
	templateUrl: 'app/components/dailyStats/dailyStats.html',
	styleUrls: ['app/components/dailyStats/dailyStats.css'],
	providers: [ Service ]
})

export class DailyStats implements OnInit{

  stat: Stat;

  constructor(private service: Service) { }

   ngOnInit(): void {
    this.getToday();
  }

  private getToday(): void {
    this.service.getTodayStats().subscribe(
      today => this.stat = today,
      err => {
        // Log errors if any
        console.log(err);
      },
      () => {
        checkNull(this.stat);
      });
  }
}

function checkNull(s:Stat) : void {
  if (!s.sales) s.sales = 0;
  if (!s.points) s.points = 0;
}