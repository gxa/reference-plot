import React from 'react';
import ReactDOM from 'react-dom';

import TSNEPlotContainer from './TSNEPlotContainer.js';

const render = function (options, container) {
    ReactDOM.render(<TSNEPlotContainer {...options} />, document.getElementById(container))
};

export {TSNEPlotContainer as default, render}
