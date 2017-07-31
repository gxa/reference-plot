import React from 'react';
import PropTypes from 'prop-types'

import ScatterPlot from './ScatterPlot.js';
import _groupBy from 'lodash/groupBy';

const referencePlotOptions = {
    chart: {
        width: 520,
        type: "scatter",
        zoomType: "xy",
        borderWidth: 2,
        borderColor: "#30426A"
    },
    xAxis: {
        title: {
            text: "Latent Variable 1"
        }
    },
    yAxis: {
        title: {
            text: "Latent Variable 2"
        }
    },
    title: {
        text: "Single Cells - t-SNE based on expression similarity"
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.point.label + '</b>'
        }
    }
}

const getSeriesMap = (clustersData, clustersChosen) => (
    new Map(clustersData[clustersChosen] || [])
)

const colors = ['red', '#7cb5ec', '#90ed7d', '#f7a35c', '#8085e9',
    '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];

const getDataSeries = (m) => {
    const seriesGroups = _groupBy(require('./tsne-coords.json'), (point) => m.get(point.label));
    const result = [];
    for (let ix of Object.keys(seriesGroups)) {
        result[ix] = {
            name: "Cluster " + ix,
            color: colors[ix],
            data: seriesGroups[ix]
        }
    }
    return result
}


class TSNEPlotContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const clusterOptions = Object.keys(this.props.clustersData).sort()
            .map((name, ix) => (
                <option key={ix} value={name}>{name}</option>
                ));

        const clusterSelected = this.props.k ? this.props.k : Object.keys(this.props.clustersData)[0];

        return (
            <div className="row">
                <div className="columns small-5">
                    <label>Clustering: {this.props.k}</label>
                    <select value={clusterSelected} onChange={this.props.handleOptionsChange}>
                        {clusterOptions}
                    </select>
                </div>
                <div className="columns small-12">
                    <ScatterPlot dataset={getDataSeries(getSeriesMap(this.props.clustersData, clusterSelected))}
                                 options={referencePlotOptions}
                    />
                </div>
            </div>
        )
    }
}
TSNEPlotContainer.propTypes = {
    clustersData: PropTypes.object.isRequired,
    k: PropTypes.string,
    clusterId: PropTypes.arrayOf(PropTypes.number),
    handleOptionsChange: PropTypes.func.isRequired
};

export default TSNEPlotContainer;