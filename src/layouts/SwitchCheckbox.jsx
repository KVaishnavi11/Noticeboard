import React from 'react'
import { FormGroup, Input } from 'reactstrap';
import { useState } from 'react';

const SwitchCheckbox = () => {
  return (
    <div>
      <FormGroup switch>
        <Input type="switch" role="switch" />
        
      </FormGroup>
      <FormGroup switch>
        <Input
          type="switch"
          checked={state}
          onClick={() => {
            setState(!state);
          }}
        />
       
      </FormGroup>
    </div>
  )
}

export default SwitchCheckbox
