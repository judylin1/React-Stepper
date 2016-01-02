'use strict'

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Multistep } from '../../src/index'
import { steps } from './js/signup/index.js'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <Multistep steps={steps}/>
        </div>
        <div className="container app-footer">
          <h6>Press 'Enter' or click on progress bar for next step.</h6>
           Code is on <a href="https://github.com/Srdjan/react-multistep" target="_blank">github</a>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))
