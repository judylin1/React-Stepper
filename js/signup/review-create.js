'use strict';

import React, { Component, PropTypes } from 'react';

const store = { textField3: '' }

const ReviewCreate = React.createClass ({
  getInitialState() {
    return store
  },

  handleChange(e) {
    store.textField3 = e.target.value
    this.setState(store)
  },

  render() {
    return (
      <div className='fields'>
        <label>Test Field 3</label>
        <br />
        <input type="text"
               onChange={this.handleChange}
               value={this.state.textField3}
               autoFocus/>
      </div>
  )}
})

export { ReviewCreate }
