"use strict";

//*------------------------------------------------------------------*

var React = require('react');
var ReactHighcharts = require('react-highcharts');
var Highcharts = ReactHighcharts.Highcharts;

var shallowCompare = require('react-addons-shallow-compare');

//*------------------------------------------------------------------*

var baseOptions = {
  credits: {
    enabled: false
  },
  chart: {
    type: 'scatter',
    zoomType: 'xy',
    borderWidth: 2,
    borderColor: '#30426A'
  },
  title: {
    text: ''
  },
  tooltip: {
    formatter: function formatter() {
      return '<b>' + undefined.point.name + '</b>';
    }
  },
  xAxis: {
    title: {
      enabled: true,
      text: 'X'
    }
  },
  yAxis: {
    title: {
      text: 'Y'
    }
  },
  legend: {
    layout: 'vertical',
    floating: false,
    align: 'right',
    verticalAlign: 'middle'
  },
  plotOptions: {
    scatter: {
      turboThreshold: 0,
      marker: {
        lineWidth: 1,
        lineColor: 'black'
      }
    },
    series: {
      color: 'grey'
    }
  }
};

var ScatterPlot = React.createClass({
  displayName: 'ScatterPlot',

  propTypes: {
    dataset: React.PropTypes.array.isRequired,
    options: React.PropTypes.object.isRequired
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  },
  render: function render() {
    var config = Object.assign({}, baseOptions, this.props.options, { series: this.props.dataset });

    return React.createElement(ReactHighcharts, {
      config: config,
      ref: 'chart' });
  }
});

module.exports = ScatterPlot;