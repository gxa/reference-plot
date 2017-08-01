import React from 'react'
import PropTypes from 'prop-types'

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
        for (let cluster of clusterId) {
            const c = this.refs.chart.chart.series[cluster].data;
            for (let i = 0; i < c.length; i++) {
                this.refs.chart.chart.series[cluster].data[i].setState('hover');
            }
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