'use strict';

import React, { Component, PropTypes } from 'react';

function getNavStates(indx, length) {
  let styles = []
  for (let i=0; i<length; i++) {
    if(i < indx) {
      styles.push('done')
    }
    else if(i === indx) {
      styles.push('doing')
    }
    else {
      styles.push('todo')
    }
  }
  return { current: indx, styles: styles }
}

const Multistep = React.createClass({
  getInitialState() {
    return {
      compState: 0,
      navState: getNavStates(0, this.props.steps.length)
    }
  },

  setNavState(next) {
    this.setState({navState: getNavStates(next, this.props.steps.length)})
    if(next < this.props.steps.length) {
      this.setState({compState: next})
    }
  },

  handleKeyDown(evt) {
    if(evt.which === 13) {
      this.next()
    }
  },

  handleOnClick(evt) {
    if(evt.target.value  === (this.props.steps.length-1) &&
       this.state.compState === (this.props.steps.length-1))     {
      this.setNavState(this.props.steps.length)
    }
    else {
      this.setNavState(evt.target.value)
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
    var _this = this

    return (
      <div className='progtrckr' onKeyDown={this.handleKeyDown}>
        {this.props.steps.map(function (s, i) {
          return (
            <div className='container'>
              <li value={i} key={i} className={"progtrckr-" + _this.state.navState.styles[i]} onClick={_this.handleOnClick}>
                <span className='title'>{_this.props.steps[i].name}</span>
                <span className='grey-line'></span>
              </li>
            </div>
          )
      }, this)}
        {this.props.steps[this.state.compState].component}
      </div>
    );
  }
});

export { Multistep }
