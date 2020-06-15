import React, { useState } from "react";

import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = (e) => {
    if(message === '' || tech === '' ){
      M.toast({html: 'Please enter a valid log message and technician'});
    } else{
      console.log(e);
      setMessage('');
      setAttention(false);
      setTech('');
    }
  }
  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='Message'>Message</label>
            </div>
            </div>
            <div className='row'>
              <div className='input-field'>
            
                  <select className='browser-default' name='tech' value={tech} onChange={e => setTech(e.target.value)}>
                    <option value='' disabled selected>
                     Select Technician
                    </option>
                    <option value='Name 1'>Name 1</option>
                    <option value='Name 2'>Name 2</option>
                    <option value='Name 3'>Name 3</option>
                  </select>
                  
                
              </div>
            </div>
            <div className='row'>
              <div className='input-field'>
                <label>
                  <input
                    type='checkbox'
                    name='attention'
                    className='filled-in'
                    checked={attention}
                    value={attention}
                    onChange={(e) => setAttention(!attention)}
                  />
                  <span>Attention Required</span>
                </label>
              </div>
            </div>
          </div>
        
      <div className='modal-footer'>
          <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-green btn-flat'>Enter</a>
      </div>
    </div>
  );
};

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default EditLogModal;
