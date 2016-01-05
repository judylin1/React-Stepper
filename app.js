'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Multistep } from './src/index';
import { steps } from './js/signup/index.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Multistep steps={steps}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
