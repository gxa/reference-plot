'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _reactHighcharts = require('react-highcharts');

var _reactHighcharts2 = _interopRequireDefault(_reactHighcharts);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var ScatterPlot = function (_React$Component) {
    _inherits(ScatterPlot, _React$Component);

    function ScatterPlot(props) {
        _classCallCheck(this, ScatterPlot);

        return _possibleConstructorReturn(this, (ScatterPlot.__proto__ || Object.getPrototypeOf(ScatterPlot)).call(this, props));
    }

    _createClass(ScatterPlot, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
        }
    }, {
        key: 'highlightCluster',
        value: function highlightCluster(clusterId) {
            var _this2 = this;

            if (clusterId.length) {
                this.refs.chart.chart.series.forEach(function (series, seriesIndex) {
                    var c = _this2.refs.chart.chart.series[seriesIndex].data;
                    for (var i = 0; i < c.length; i++) {
                        if (clusterId.includes(seriesIndex)) {
                            // this.refs.chart.chart.series[seriesIndex].data[i].setState('hover');
                        } else {
                            var thisPointColor = (0, _color2.default)(_this2.refs.chart.chart.series[seriesIndex].data[i].graphic.attr('fill'));
                            // this.refs.chart.chart.series[seriesIndex].data[i].graphic.attr({fill: thisPointColor.desaturate(0.65).lighten(0.25).rgb().string()})
                            _this2.refs.chart.chart.series[seriesIndex].data[i].graphic.attr({ fill: thisPointColor.grayscale().rgb().string() });
                        }
                    }
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.highlightCluster(nextProps.clusterId);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.highlightCluster(this.props.clusterId);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            this.highlightCluster(this.props.clusterId);
        }
    }, {
        key: 'render',
        value: function render() {
            var config = Object.assign({}, baseOptions, this.props.options, { series: this.props.dataset });

            return _react2.default.createElement(_reactHighcharts2.default, {
                config: config,
                ref: 'chart' });
        }
    }]);

    return ScatterPlot;
}(_react2.default.Component);

ScatterPlot.propTypes = {
    dataset: _propTypes2.default.array.isRequired,
    options: _propTypes2.default.object.isRequired
};

exports.default = ScatterPlot;