import { Component, OnInit, Directive} from '@angular/core';
import { Service }   from '../../service/service';
import { GraphElement } from '../../service/GraphElement';
import * as moment from 'moment';

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
    this.getWeekly();
  }

  private getWeekly(): void {
    this.service.getWeekly().subscribe(
      result => {
        this.data = result;
      },
      err => {
        // Log errors if any
        console.log(err);
      },
      () => {
        
        this.setData();
        this.renderGraph();
      });
  }

  private setData():void {
    let temp = formatLabel(setZeroSales(this.data));
    this.data = [
      {
        key: "Revenue Graph",
        values: temp
      }
    ];
  }

  private renderGraph():void {
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
  }
}

// Input: Response from API server for total sales per day of the previous week
//        NOTE: days with $0 sales will have no entries in the response
//              response is ordered in ASC order (latest to most recent date)
// Output: Returns GraphElement[] with the orignal inputs plus all the days that
//         were not present with value 0 for total revenue for those days
function setZeroSales(e:GraphElement[]) : GraphElement[] {

  // Get date 6 days ago (graph will display today as the 7th day)
  var startDate = moment().subtract(6, 'days').startOf('day');

  // Create an array to hold days with no entries in e[]
  var temp:GraphElement[] = [];

  // Go through the elements in e[] to see which days are accounted for
  for (let element of e) {

    // Get the date of element from its label and using Moment.js
    var saleDate = moment(element.label);

    // While the start date != sales date (those dates aren't accounted for
    // in the response), add those dates to array temp
    while(startDate.diff(saleDate) != 0) {
      temp.push({
        label: startDate.format('YYYYMMDD').toString(),
        value: 0
      });
      startDate.add(1, 'days');
    }
    startDate.add(1, 'days');
  }

  // Add days between the last entry in e[] and tomorrow (not includding) that aren't accounted for
  var today = moment().add(1, 'days').startOf('day');
  while(startDate.diff(today) != 0) {
    temp.push({
        label: startDate.format('YYYYMMDD').toString(),
        value: 0
      });
      startDate.add(1, 'days');
  }

  // Join the temp array with the orignal array
  e = e.concat(temp);

  // Sort the array by days in ascending order
  e.sort(function (left, right) {
    return moment.utc(left.label).diff(moment.utc(right.label))
  });
  return e;
}

function formatLabel(e:GraphElement[]) : GraphElement[] {
  for (let element of e) {
    element.label = moment(element.label).format('MM/DD').toString();
  }
  return e;
}