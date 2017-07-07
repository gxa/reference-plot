import React from 'react';
import ReactDOM from 'react-dom';

import TSNEPlotContainer from '../src/TSNEPlotContainer.jsx';

const render = function (options, container) {
    ReactDOM.render(<TSNEPlotContainer {...options} />, document.getElementById(container))
};

export {TSNEPlotContainer as default, render}
