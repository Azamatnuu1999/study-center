import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartDataModel } from '../models/chart.model';
import type { EChartsOption } from 'echarts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";

interface DummyModel  {
  profileId: number,
  name: string,
  total: number,
  year: number,
  month: number
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-teacher-chart',
  templateUrl: './teacher-chart.component.html',
  styleUrls: ['./teacher-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TeacherChartComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "serie1",
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: "serie2",
          data: [53, 32, 33, 52, 13, 44, 32]
        },
        {
          name: "serie3",
          data: [50, 30, 30, 50, 10, 40, 30]
        }
      ],
      chart: {
        type: "bar",
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
      }
    };
  }
  /**
   * 
   */
  public chartData!: Object[];

  options!: EChartsOption;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    console.log('data1', data1)

    this.options = {
      legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4', 'bar5'],
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

  // getTopFive(data: DummyModel) {
  //   data.
  // }

  /**
   * 
   */
  dummyData = [
    {
        "profileId": 1517655720,
        "name": "Victoria",
        "total": 65,
        "year": 2023,
        "month": 1
    },
    {
        "profileId": 1517655301,
        "name": "Sabrina",
        "total": 60,
        "year": 2023,
        "month": 1
    },
    {
        "profileId": 1517655675,
        "name": "Sophie",
        "total": 60,
        "year": 2023,
        "month": 1
    },
    {
        "profileId": 1496162152,
        "name": "Lucinha",
        "total": 200,
        "year": 2023,
        "month": 1
    },
    {
        "profileId": 1517655536,
        "name": "Esther",
        "total": 140,
        "year": 2023,
        "month": 1
    },
    {
        "profileId": 1517655724,
        "name": "Kristin",
        "total": 255,
        "year": 2023,
        "month": 1
    },
    {
        "profileId": 1517655602,
        "name": "Rabi",
        "total": 60,
        "year": 2023,
        "month": 1
    },
    {
        "profileId": 1517655719,
        "name": "Tamaraor",
        "total": 620,
        "year": 2023,
        "month": 1
    },
    {
        "profileId": 1517655155,
        "name": "Katerin",
        "total": 200,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1517655470,
        "name": "M",
        "total": 302,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1517655739,
        "name": "Jelena C",
        "total": 120,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1517655736,
        "name": "Vanessa F",
        "total": 170,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1505659732,
        "name": "Olga",
        "total": 160,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1517655741,
        "name": "Patricia J ",
        "total": 140,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1511465603,
        "name": "Doriz B",
        "total": 328,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1517655731,
        "name": "JoGmür",
        "total": 90,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1511467157,
        "name": "Victoria L",
        "total": 278,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1517655727,
        "name": "Ronja D",
        "total": 128,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1517655122,
        "name": "Vivi V",
        "total": 180,
        "year": 2023,
        "month": 2
    },
    {
        "profileId": 1517655242,
        "name": "Atena S",
        "total": 280,
        "year": 2023,
        "month": 2
    }
  ]
}