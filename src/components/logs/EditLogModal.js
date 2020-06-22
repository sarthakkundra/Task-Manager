import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { clearCurrent, updateLog } from '../../actions/logActions'

import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current , clearCurrent, updateLog}) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current !== null) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = (e) => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a valid log message and technician" });
    } else {
      
      const newLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      }

      updateLog(newLog);
      
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
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
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              className='browser-default'
              name='tech'
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            >
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
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-green btn-flat'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});
const modalStyle = {
  width: "75%",
  height: "75%",
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { clearCurrent, updateLog })(EditLogModal);
