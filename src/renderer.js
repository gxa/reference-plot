import React from 'react';
import ReactDOM from 'react-dom';

import TSNEPlotContainer from './TSNEPlotContainer.jsx';

export default function ({container}) {
    ReactDOM.render(
        <TSNEPlotContainer />,
        typeof container === `string` ? document.getElementById(container) : container)
};
