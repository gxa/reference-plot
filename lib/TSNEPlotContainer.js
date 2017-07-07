"use strict";

//*------------------------------------------------------------------*

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactBootstrap = require('react-bootstrap');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ScatterPlot = require('./ScatterPlot.jsx');

var _groupBy = require('lodash/groupBy');

//*------------------------------------------------------------------*
var referencePlotOptions = {
    "chart": {
        width: 520,
        "type": "scatter",
        "zoomType": "xy",
        "borderWidth": 2,
        "borderColor": "#30426A"
    },
    "xAxis": {
        "title": {
            "text": "Latent Variable 1"
        }
    },
    "yAxis": {
        "title": {
            "text": "Latent Variable 2"
        }
    },
    "title": {
        text: "Single Cells - t-SNE based on expression similarity"
    },
    tooltip: {
        formatter: function formatter() {
            return '<b>' + this.point.label + '</b>';
        }
    }
};

var getSeriesMap = function getSeriesMap(clustersChosen) {
    return new Map(require('./clusters.json')[clustersChosen] || []);
};

var colors = ['red', '#7cb5ec', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];

var getDataSeries = function getDataSeries(m) {
    var seriesGroups = _groupBy(require('./tsne-coords.json'), function (point) {
        return m.get(point.label);
    });
    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(seriesGroups)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ix = _step.value;

            result[ix] = {
                name: "Cluster " + ix,
                color: colors[ix],
                data: seriesGroups[ix]
            };
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
};

// const PlotContainer = React.createClass({

var PlotContainer = function (_React$Component) {
    _inherits(PlotContainer, _React$Component);

    // getInitialState: function () {
    //     return {
    //         clustersChosen: Object.keys(require('./clusters.json')).sort()[0]
    //     }
    // },

    function PlotContainer(props) {
        _classCallCheck(this, PlotContainer);

        var _this = _possibleConstructorReturn(this, (PlotContainer.__proto__ || Object.getPrototypeOf(PlotContainer)).call(this, props));

        _this.state = {
            clustersChosen: Object.keys(require('./clusters.json')).sort()[0]
        };
        return _this;
    }

    _createClass(PlotContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h5',
                    null,
                    'Clustering plot'
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        _reactBootstrap.DropdownButton,
                        { title: "Clustering: " + this.state.clustersChosen, id: 'bg-nested-dropdown' },
                        Object.keys(require('./clusters.json')).sort().map(function (name, ix) {
                            return React.createElement(
                                _reactBootstrap.MenuItem,
                                {
                                    key: ix,
                                    onClick: function onClick() {
                                        return _this2.setState({ clustersChosen: name });
                                    },
                                    eventKey: ix },
                                name
                            );
                        })
                    ),
                    React.createElement(ScatterPlot, {
                        dataset: getDataSeries(getSeriesMap(this.state.clustersChosen)),
                        options: referencePlotOptions
                    })
                ),
                React.createElement(
                    'div',
                    { className: 'row', style: { fontSize: "xs" } },
                    React.createElement(
                        'span',
                        null,
                        ' Clustering computed using '
                    ),
                    React.createElement(
                        'a',
                        { href: 'http://biorxiv.org/content/early/2016/01/13/036558' },
                        'SC3'
                    )
                )
            );
        }
    }]);

    return PlotContainer;
}(React.Component);

exports.default = PlotContainer;