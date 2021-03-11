import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import FusionMap from 'fusioncharts/fusioncharts.maps' // 地图
import FusionWorld from 'fusioncharts/maps/fusioncharts.world' // 地图
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, FusionMap, FusionWorld);

class Statistics extends React.Component {
  render() {

    const chartConfigs = {
      type: 'column2d', // line, area2d, bar2d, bar3d, column2d, column3d
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: '单柱状图',
          subCaption: '带参考线',
          xAxisName: '项目名称',
          yAxisName: '金额（元）',
          numberSuffix: '',
          theme: 'fusion'
        },
        data: [{
            label: 'Venezuela',
            value: '290'
          },
          {
            label: 'Saudi',
            value: '260'
          },
          {
            label: 'Canada',
            value: '180'
          },
          {
            label: 'Iran',
            value: '140'
          },
          {
            label: 'Russia',
            value: '115'
          },
          {
            label: 'UAE',
            value: '100'
          },
          {
            label: 'US',
            value: '30'
          },
          {
            label: 'China',
            value: '30'
          }
        ],
        // column图-线
        trendlines: [{
          'line': [{
            'startvalue': '200',
            'valueOnRight': '1',
            'displayvalue': '目标'
          }]
        }]
      }
    };

    const twochartsConfigs = {
      type: 'mscombi2d', // mscolumn2d（柱状图）, mscombi2d（每个图表数据都单独设置类型renderAs: 'area'）
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: '多柱状图',
          subcaption: '注意数据格式',
          xaxisname: '项目名称',
          yaxisname: '金额（元）',
          numbersuffix: '',
          theme: 'fusion'
        },
        categories: [{
          category: [{
              label: 'Q1'
            },
            {
              label: 'Q2'
            },
            {
              label: 'Q3'
            },
            {
              label: 'Q4'
            }
          ]
        }],
        dataset: [{
            seriesname: '数据1',
            renderAs: 'area',
            data: [{
                value: '1200'
              },
              {
                value: '1050'
              },
              {
                value: '2350'
              },
              {
                value: '1600'
              }
            ]
          },
          {
            seriesname: '数据2',
            renderAs: 'line',
            data: [{
                value: '2440'
              },
              {
                value: '2980'
              },
              {
                value: '2080'
              },
              {
                value: '2680'
              }
            ]
          }
        ]
      }
    };

    const mapConfigs = {
      type: 'maps/world',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: '地图图表',
          subcaption: '注意数据格式',
          numbersuffix: '%',
          includevalueinlabels: '1',
          labelsepchar: ': ',
          entityFillHoverColor: '#fff9c4',
          theme: 'fusion'
        },
        colorrange: {
          color: [{
            minvalue: '0.5',
            maxvalue: '1.0',
            color: '#FFD74D'
          }, {
            minvalue: '1.0',
            maxvalue: '2.0',
            color: '#FB8C00'
          }, {
            minvalue: '2.0',
            maxvalue: '3.0',
            color: '#E65100'
          }]
        },
        data: [{
          id: 'NA',
          value: '.82',
          showLabel: '1'
        }, {
          id: 'SA',
          value: '2.04',
          showLabel: '1'
        }, {
          id: 'AS',
          value: '1.78',
          showLabel: '1'
        }, {
          id: 'EU',
          value: '.40',
          showLabel: '1'
        }, {
          id: 'AF',
          value: '2.58',
          showLabel: '1'
        }, {
          id: 'AU',
          value: '1.30',
          showLabel: '1'
        }]
      }
    };

    return (
      <div className = "jmain flex" >
        <ReactFC {...chartConfigs} > </ReactFC>
        <ReactFC {...twochartsConfigs} > </ReactFC>
        <ReactFC {...mapConfigs} > </ReactFC>
      </div>
    )
  }
};
export default Statistics;