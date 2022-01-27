import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  constructor() { }

  ngOnInit() {

var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
        labels: ["Switch", "MO", "MATRIX", "MX", "Optimant"],
        datasets: [{
            label: 'Compsant du data center',
            data: [8, 4, 3, 5,1,6, 3],


            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var myChart = new Chart("my", {
  type: 'bar',
  data: {
      labels: ["Landor", "Polina", "sagemcom"],
      datasets: [{
          label: 'nombre des offre par prospect',
          data: [4, 3, 7],


          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
});
  }


}
