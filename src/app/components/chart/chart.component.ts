import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, HostListener, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
  showTicks: any;
  autoTicks: any;

  @Input() set shorttoken(value: string) {
    this.shortToken = value;
  }
  @Input() set accesstoken(value: string) {
    this.accessToken = value;
  }
  @Input() set titletext(value: string) {
    this.titleText = value;
  }
  @Input() set chartmode(value: boolean) {
    this.mode3d = value;
  }
  @Input() set subtitle(value: string) {
    this.subtitleTextHtml = value;
  }

  @Input() set yaxistext(value: string) {
    this.yAxisText = value;
  }
  @Input() set xaxistext(value: string) {
    this.xAxisText = value;
  }

  @Input() set charttype(value: string) {
    this.type = value;
  }
  @Input() set tooltipsuffix(value: string) {
    this.toolTipSuffix = value;
  }
  @Input() categories: Array<string>;

  @Input() set categoriestype(value: string) {
    this.categoriesType = value;
  }
  @Input() series: any;


  @Input() set toggleOptions(value: boolean) {
    this.ngZone.run(() => {
      this.showOptionsPanel = value;
    });
    setTimeout(() => {
      this.redrawChart();
    }, 0);

  }
  constructor(private ngZone: NgZone) { }
  chart: Chart = null;
  alpha = 0;
  beta = 0;
  depth = 60;

  shortToken: string;
  accessToken: string;
  titleText: string;
  mode3d = false;
  subtitleTextHtml: string;
  yAxisText: string;
  xAxisText: string;
  type = 'column';
  toolTipSuffix: string;

  categoriesType = 'category';

  @Input() options3d: any = {
      enabled: false,
      alpha: this.alpha,
      beta: this.beta,
      depth: this.depth,
      viewDistance: 25
  };
  @Input() headercolor = '#f7f7f7';
  @Input() headertitle;

  @Input() drilldown: any;
  showOptionsPanel = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  // tslint:disable-next-line:variable-name
  private _tickInterval = 1;

  chartTypes: Array<any> = [
    {
      name: 'line',
      caption: 'Line Chart'
    }, {
      name: 'area',
      caption: 'Area Chart'
    }, {
      name: 'bar',
      caption: 'Bar Chart'
    }, {
      name: 'column',
      caption: 'Column Chart'
    }, {
      name: 'spline',
      caption: 'Spline Chart'
    }, {
      name: 'pie',
      caption: 'Pie Chart'
    }, {
      name: 'areaspline',
      caption: 'Area Spline Chart'
    }, {
      name: 'cylinder',
      caption: 'Cylinder Chart'
    }
  ];
  switchToggle() {
    this.toggleOptions = !this.showOptionsPanel;
  }
  changeToggle(event: any) {
    this.mode3d = event.checked;
    this.options3d.enabled = this.mode3d;
    setTimeout(() => {
      this.redrawChart();
    }, 0);
  }

  changeType(event: any, type: string) {
    // console.log(event,type);
    this.type = type;
    this.redrawChart();
  }
  drawChart() {

    this.chart = new Chart({
      chart: {
        type: this.type as any,
        options3d: this.options3d,
        marginBottom: 100
      },
      title: {
        text: this.titleText
      },
      subtitle: {
          text: this.subtitleTextHtml
      },
      xAxis: {
          type: this.categoriesType,
          categories: this.categories, // what actually shows on X
          title: {
              text: this.xAxisText
          }
      } as any,
      yAxis: {
          min: null,
          title: {
              text: this.yAxisText,
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                }
            }
        }]
    },
      tooltip: {
          valueSuffix: this.toolTipSuffix
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          },
          column: {
            depth: 25
          }, pie: {
            // innerSize: 100,
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}:</b> {point.y:,.0f}' + this.toolTipSuffix
            }
          }
      },
      legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          backgroundColor: ('#FFFFFF'),
          y: 0,
          x: 0,
          shadow: true
      },
      credits: {
        enabled: false
      },
      series: this.series,
      drilldown: this.drilldown ? this.drilldown : {}
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.chart.ref$.subscribe((chart: any) => {
      chart.redraw(false);
      // this.drawChart();
    });

  }

  change3D(event: any, param: string) {

    this.ngZone.run(() => {
      this.options3d = {
        enabled: true,
        alpha: this.alpha,
        beta: this.beta,
        depth: this.depth,
        viewDistance: 25
      };
      this.chart.ref$.subscribe((chart: any) => {
        chart.options.chart.options3d.enabled = true;
        chart.options.chart.options3d.alpha = this.alpha;
        chart.options.chart.options3d.beta = this.beta;
        chart.options.chart.options3d.depth = this.depth;
        chart.redraw(false);
      });
    });

  }
  redrawChart() {
    this.ngZone.run(() => {
      this.drawChart();
    });
  }
  ngOnInit() {

    // this.seedChart();
    this.drawChart();
  }

  seedChart() {
    this.titleText = 'My chart';
    this.yAxisText = 'My Y Axis title';
    this.xAxisText = 'My X Axis title';
    this.toolTipSuffix = ' AED';
    this.type = 'column';
    this.subtitleTextHtml = 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>';
    this.series = [
      {
        name: 'Series 1',
        data: [{
          name: 'Point',
          y: 62.74,
          drilldown: 'Point'
        }, {
          name: 'Point 2',
          y: 6.74,
          drilldown: 'Point 2'
        }, {
          name: 'Point 3',
          y: 56.74,
          drilldown: 'Point 3'
        }, {
          name: 'Point 4',
          y: 22.74,
          drilldown: null
        }, {
          name: 'Point 5',
          y: 72.74,
          drilldown: 'Point 5'
        }, {
          name: 'Point 6',
          y: 82.74,
          drilldown: 'Point 6'
        }]
      }
    ];
    this.drilldown = {
      series: [
        {
          name: 'Point',
          id: 'Point',
          data: [
            // x and y axis
            ['Sub point', 29], ['Sub point 2', 29], ['Sub point 3', 29], ['Sub point 4', 29],
          ]
        }, {
          name: 'Point 2',
          id: 'Point 2',
          data: [
            // x and y axis
            ['Sub point', 29], ['Sub point 2', 29], ['Sub point 3', 29], ['Sub point 4', 29],
          ]
        }
      ]
    };

    this.categories = ['Africa', 'America', 'Asia', 'Antartica', 'Australia', 'Europe'];
    this.drawChart();
  }

}
