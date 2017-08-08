import React from 'react'
import PropTypes from 'prop-types'

import Color from 'color'

import ReactHighcharts from 'react-highcharts'
import shallowCompare from "react-addons-shallow-compare";

const baseOptions = {
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
        formatter: () => ('<b>' + this.point.name + '</b>')
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

class ScatterPlot extends React.Component {

    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    highlightCluster(clusterId) {
        // for (let cluster of clusterId) {
        //     const c = this.refs.chart.chart.series[cluster].data;
        //     for (let i = 0; i < c.length; i++) {
        //         this.refs.chart.chart.series[cluster].data[i].setState('hover');
        //     }
        // }

        if (clusterId.length) {
            this.refs.chart.chart.series.forEach((series, seriesIndex) => {
                const c = this.refs.chart.chart.series[seriesIndex].data;
                for (let i = 0; i < c.length; i++) {
                    if (clusterId.includes(seriesIndex)) {
                        // this.refs.chart.chart.series[seriesIndex].data[i].setState('hover');
                    } else {
                        const thisPointColor = Color(this.refs.chart.chart.series[seriesIndex].data[i].graphic.attr(`fill`))
                        // this.refs.chart.chart.series[seriesIndex].data[i].graphic.attr({fill: thisPointColor.desaturate(0.65).lighten(0.25).rgb().string()})
                        this.refs.chart.chart.series[seriesIndex].data[i].graphic.attr({fill: thisPointColor.whiten(0.15).desaturate(0.50).lighten(0.25).rgb().string()})
                    }
                }
            })
        }

    }

    componentWillReceiveProps(nextProps) {
        this.highlightCluster(nextProps.clusterId);
    }

    componentDidMount() {
        this.highlightCluster(this.props.clusterId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.clusterId !== this.props.clusterId) {
            this.highlightCluster(this.props.clusterId);
        }
    }

    render() {
        const config = Object.assign({},
            baseOptions,
            this.props.options,
            {series: this.props.dataset}
        );

        return (
            <ReactHighcharts
                config={config}
                ref="chart"/>
        );
    }
}

ScatterPlot.propTypes = {
    dataset: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired
};

export default ScatterPlot;