'use strict';

import React, { Component, PropTypes } from 'react';

function getNavStates(index, length) {
  let styles = []
  for (let i=0; i<length; i++) {
    (i < index) ? styles.push('done') : (i === index) ? styles.push('doing') : styles.push('todo')
  }
  return { current: index, styles: styles }
}

const Multistep = React.createClass({
  getInitialState() {
    return {
      compState: 0,
      navState: getNavStates(0, this.props.steps.length),
    }
  },

  setNavState(next) {
    this.setState({navState: getNavStates(next, this.props.steps.length)})
    if(next < this.props.steps.length) {
      this.setState({compState: next})
    }
  },

  // if enter key (13) is pressed
  handleKeyDown(e) {
    if(e.which === 13) {
      this.next()
    }
  },

  handleOnClick(e) {
    if(e.target.value  === (this.props.steps.length-1) &&
       this.state.compState === (this.props.steps.length-1))     {
      this.setNavState(this.props.steps.length)
    }
    else {
      this.setNavState(e.target.value)
    }
  },

  next() {
    this.setNavState(this.state.compState + 1)
  },

  previous() {
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1)
    }
  },

  render: function() {
    const _this = this

    return (
      <div className='stepper-container' onKeyDown={this.handleKeyDown}>
        {this.props.steps.map(function (s, i) {
          return (
            <div className='step-container'>
              <li value={i} key={i} className={"stepper-container-" + _this.state.navState.styles[i]} onClick={_this.handleOnClick}>
                <span className='step-title'>{_this.props.steps[i].name}</span>
                <span className='step-grey-line'></span>
              </li>
            </div>
          )
      }, this)}
        {this.props.steps[this.state.compState].component}
      </div>
    );
  },
});

export { Multistep }
