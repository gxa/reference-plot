'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ScatterPlot = require('./ScatterPlot.js');

var _ScatterPlot2 = _interopRequireDefault(_ScatterPlot);

var _groupBy2 = require('lodash/groupBy');

var _groupBy3 = _interopRequireDefault(_groupBy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var referencePlotOptions = {
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
        formatter: function formatter() {
            return '<b>' + this.point.label + '</b>';
        }
    }
};

var getSeriesMap = function getSeriesMap(clustersData, clustersChosen) {
    return new Map(clustersData[clustersChosen] || []);
};

var colors = ['red', '#7cb5ec', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];

var getDataSeries = function getDataSeries(m) {
    var seriesGroups = (0, _groupBy3.default)(require('./tsne-coords.json'), function (point) {
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

var TSNEPlotContainer = function (_React$Component) {
    _inherits(TSNEPlotContainer, _React$Component);

    function TSNEPlotContainer(props) {
        _classCallCheck(this, TSNEPlotContainer);

        return _possibleConstructorReturn(this, (TSNEPlotContainer.__proto__ || Object.getPrototypeOf(TSNEPlotContainer)).call(this, props));
    }

    _createClass(TSNEPlotContainer, [{
        key: 'render',
        value: function render() {
            var clusterOptions = Object.keys(this.props.clustersData).sort().map(function (name, ix) {
                return _react2.default.createElement(
                    'option',
                    { key: ix, value: name },
                    name
                );
            });

            var clusterSelected = this.props.k ? this.props.k : Number.parseInt(Object.keys(this.props.clustersData)[0]);

            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'columns small-5' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Clustering: '
                    ),
                    _react2.default.createElement(
                        'select',
                        { value: clusterSelected, onChange: this.props.handleOptionsChange },
                        clusterOptions
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'columns small-12' },
                    _react2.default.createElement(_ScatterPlot2.default, { dataset: getDataSeries(getSeriesMap(this.props.clustersData, clusterSelected)),
                        options: referencePlotOptions,
                        clusterId: this.props.clusterId
                    })
                )
            );
        }
    }]);

    return TSNEPlotContainer;
}(_react2.default.Component);

TSNEPlotContainer.propTypes = {
    clustersData: _propTypes2.default.object.isRequired,
    k: _propTypes2.default.number,
    clusterId: _propTypes2.default.arrayOf(_propTypes2.default.number),
    handleOptionsChange: _propTypes2.default.func.isRequired
};

exports.default = TSNEPlotContainer;