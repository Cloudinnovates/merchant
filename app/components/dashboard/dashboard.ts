import { Component, OnInit} from '@angular/core';

import { Today }   from '../../service/today';
import { Service }   from '../../service/service';

@Component({
	selector: 'dashboard',
	templateUrl: 'app/components/dashboard/dashboard.html',
	styleUrls: ['app/components/dashboard/dashboard.css'],
	providers: [ Service ]
})

export class Dashboard implements OnInit{

  today: Today;

  constructor(private service: Service) { }

   ngOnInit(): void {
    this.service.getToday()
      .then(today => this.today = today);
  }

}