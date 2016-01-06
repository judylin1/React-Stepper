'use strict';

import React, { Component, PropTypes } from 'react';

const store = { textField3: '' }

const ReviewCreate = React.createClass ({
  getInitialState() {
    return store
  },

  handleTestBoxChange(e) {
    store.textField3 = e.target.value
    this.setState(store)
  },

  render() {
    return (
      <div className='test-fields'>
        <label>Test Field 3</label>
        <br />
        <input type="text"
               onChange={this.handleTestBoxChange}
               value={this.state.textField3}
               autoFocus/>
      </div>
  )},
})

export { ReviewCreate }
