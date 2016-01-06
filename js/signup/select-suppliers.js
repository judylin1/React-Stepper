'use strict';

import React, { Component, PropTypes } from 'react';

const store = { textField2: '' }

const SelectSuppliers = React.createClass ({
  getInitialState() {
    return store
  },

  handleTestBoxChange(e) {
    store.textField2 = e.target.value
    this.setState(store)
  },

  render() {
    return (
      <div className='test-fields'>
        <label>Test Field 2</label>
        <br />
        <input type="text"
               onChange={this.handleTestBoxChange}
               value={this.state.textField2}
               autoFocus/>
      </div>
  )},
})

export { SelectSuppliers }
