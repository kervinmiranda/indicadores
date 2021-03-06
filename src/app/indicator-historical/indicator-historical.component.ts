import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../services/indicators.service';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-indicator-historical',
  templateUrl: './indicator-historical.component.html',
  styleUrls: ['./indicator-historical.component.css']
})
export class IndicatorHistoricalComponent implements OnInit {

  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public values:number[] = [];
  public indicatorName: string;
  public labels:string[] = [];  
  public lineChartOptions: ChartOptions = {
    responsive: true,
      legend: {
        display: true,
        labels: {
          fontSize: 18
        }
      },
      scales:{
        xAxes: [{
          ticks: {
              autoSkip: true,
              maxTicksLimit: 15
          },
          gridLines: {
            color: 'rgba(171,171,171,1)',
            lineWidth: 1
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'rgba(171,171,171,1)',
            lineWidth: 1
          }
        }]
    }
  };  
  public lineChartColors: Color[] = [
    {
      borderWidth: 2,
      borderColor: 'blue',
      backgroundColor: 'rgba(124, 176, 232)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  
  constructor(public indicatorsService: IndicatorsService, private activeRoute: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.getdata();
    this.fillData();
  }

  //Get Data From Api
  private getdata(){    
    this.indicatorsService.getIndicatorHistorical(this.activeRoute.snapshot.params.key).subscribe(
      data => {
        this.indicatorName = data.nombre;
        data.serie.reverse().forEach(item => {
          this.labels.push(moment.utc(item.fecha).local().format("DD/MM/YYYY"));
          this.values.push(item.valor);
        });
        this.fillData();
      }, 
      error => {
        console.error('Cant read data');
        throw new Error(error);
      },
      () => {        
      }
    )      
  }

  //Fill data to Chart
  private fillData(){
    this.lineChartData = [
      { 
        data: this.values,
        label: this.indicatorName
      },
    ],
    this.lineChartLabels = this.labels;    
  }

  goBack() {
    this._location.back();
  }
}
