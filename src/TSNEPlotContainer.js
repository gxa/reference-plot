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

        this.state = {
            clustersChosen: props.clusterId,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({clustersChosen: e.target.value})
    }

    componentDidMount() {
        this.setState({clustersChosen: this.props.clusterId})
    }

    render() {
        const clusterOptions = Object.keys(this.props.clustersData).sort()
            .map((name, ix) => (
                <option key={ix} value={name}>{name}</option>
                ));

        return (
            <div>
                <h5>
                    Clustering plot
                </h5>
                <div className="row">
                    <div className="small-12 medium-6 columns">
                        <label>Clustering: {this.state.clustersChosen}</label>
                        <select value={this.state.clustersChosen} onChange={this.handleChange}>
                            {clusterOptions}
                        </select>

                        <ScatterPlot dataset={getDataSeries(getSeriesMap(this.props.clustersData, this.state.clustersChosen))}
                                     options={referencePlotOptions}
                        />
                    </div>


                </div>
                <div className="row" style={{fontSize: "xs"}}>
                    <span> Clustering computed using </span>
                    <a href="http://biorxiv.org/content/early/2016/01/13/036558">
                        SC3
                    </a>
                </div>
            </div>
        )
    }
}
TSNEPlotContainer.propTypes = {
    clustersData: PropTypes.object.isRequired,
    clusterId: PropTypes.string.isRequired
};

export default TSNEPlotContainer;