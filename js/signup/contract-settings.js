'use strict';

import React, { Component, PropTypes } from 'react';

const store = { testField1: '' };

const ContractSettings = React.createClass ({
  getInitialState() {
    return store
  },

  handleTestBoxChange(e) {
    store.testField1 = e.target.value
    this.setState(store)
  },

  render() {
    return (
      <div className='test-fields'>
        <label>Test Field 1</label>
        <br />
        <input type="text"
               onChange={this.handleTestBoxChange}
               value={this.state.testField1}
               autoFocus/>
      </div>
    )},
})

export { ContractSettings }
