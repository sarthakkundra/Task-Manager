import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTech } from '../../actions/techActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = (e) => {
    if(firstName === '' || lastName === '' ){
      M.toast({html: 'Please enter the full name of the technician'});
    } else{
        const newTech = {
          firstName,
          lastName
        }
        addTech(newTech);
 
    }
  }
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter Name of the Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange = {(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='Message'>First Name</label>
            </div>
            </div>


            <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange = {(e) => setLastName(e.target.value)}
            />
            <label htmlFor='Message'>Last Name</label>
            </div>
            </div>
        
      <div className='modal-footer'>
          <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-green btn-flat'>Add Technician</a>
      </div>
    </div>
    </div>
  );
};


export default connect(null, { addTech })(AddTechModal);
