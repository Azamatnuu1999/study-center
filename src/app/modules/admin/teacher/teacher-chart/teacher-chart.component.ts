import { Component, ViewEncapsulation } from '@angular/core';
import { ChartDataModel } from '../models/chart.model';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-teacher-chart',
  templateUrl: './teacher-chart.component.html',
  styleUrls: ['./teacher-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TeacherChartComponent {
  /**
   * 
   */
  public chartData!: Object[];

  options!: EChartsOption;
  constructor() {}

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: idx => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }

  /**
   * 
   */
  // ngOnInit(): void {
  //     // Data for chart series
  //     this.chartData = [
  //       { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
  //       { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
  //       { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
  //       { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
  //       { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
  //       { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  //     ];
  // }
}
