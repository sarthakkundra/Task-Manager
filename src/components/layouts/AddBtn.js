import React from "react";

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large waves-effect waves-light blue modal-trigger'
      >
        <i className='material-icons'>add</i>
      </a>

      <ul>
        <li>
          <a
            href='#add-tech-modal'
            className='btn-floating modal-trigger green'
          >
            <i className='material-icons'>person_add</i>
          </a>
        </li>
        <li>
          <a href='#tech-list-modal' className='btn-floating btn-large modal-trigger red'>
            <i className='material-icons'>person_outline</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
