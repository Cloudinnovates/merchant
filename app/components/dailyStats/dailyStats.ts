import { Component, OnInit, HostListener, ViewEncapsulation} from '@angular/core';

import { Stat }   from '../../service/stat';
import { Service }   from '../../service/service';

@Component({
	selector: 'daily-stats',
	templateUrl: 'app/components/dailyStats/dailyStats.html',
	styleUrls: ['app/components/dailyStats/dailyStats.css', 'app/components/dashboard/dashboard.css'],
  encapsulation: ViewEncapsulation.None,
	providers: [ Service ]
})

export class DailyStats implements OnInit{

  stat: Stat;

  constructor(private service: Service) { }

   ngOnInit(): void {
    this.getToday();
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    console.log(e)
  }


  private getToday(): void {
    this.service.getTodayStats().subscribe(
      stat => this.stat = stat,
      err => {
        // Log errors if any
        console.log(err);
      },
      () => {
        checkNull(this.stat);
      });
  }

  private getWeekly(): void {
    this.service.getWeeklyStats().subscribe(
      stat => this.stat = stat,
      err => {
        // Log errors if any
        console.log(err);
      },
      () => {
        checkNull(this.stat);
      });
  }

  private getMonthly(): void {
    this.service.getMonthlyStats().subscribe(
      stat => this.stat = stat,
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