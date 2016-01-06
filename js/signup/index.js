import React, { Component, PropTypes } from 'react';
import { ContractSettings } from './contract-settings';
import { SelectSuppliers } from './select-suppliers';
import { ReviewCreate } from './review-create';

const steps =
    [
      {name: 'Contract Settings', component: <ContractSettings/>},
      {name: 'Select Suppliers', component: <SelectSuppliers/>},
      {name: 'Review & Create', component: <ReviewCreate/>},
    ]

export { steps }
