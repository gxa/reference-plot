'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var container = _ref.container;

    _reactDom2.default.render(_react2.default.createElement(_TSNEPlotContainer2.default, null), typeof container === 'string' ? document.getElementById(container) : container);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TSNEPlotContainer = require('./TSNEPlotContainer.jsx');

var _TSNEPlotContainer2 = _interopRequireDefault(_TSNEPlotContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import render from './renderer.js';
//
// export {render};
;