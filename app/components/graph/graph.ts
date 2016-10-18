import { Component, OnInit, Directive} from '@angular/core';
import { Service }   from '../../service/service';

declare let d3: any;

@Component({
	selector: 'graph',
	templateUrl: 'app/components/graph/graph.html',
	styleUrls: ['app/components/graph/graph.css'],
	providers: [ Service ]
})

export class Graph implements OnInit{

  options;
  data;

  constructor(private service: Service) { }

  ngOnInit(){
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.2f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: ''
        },
        yAxis: {
          axisLabel: '',
          axisLabelDistance: -10
        },
        color:  function(){
          return 'white';
        }
      }
    }
    this.data = this.service.getWeekly();
  }

}