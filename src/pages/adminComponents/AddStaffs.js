import React from 'react';
import AddStaff from "../.././components/Forms/AddStaff";
/**
 * It's a function that returns a div with a className of 'forms' and a child component of AddStaff.
 * @returns A function that returns a div with a className of 'forms' and a component called AddStaff.
 */

function AddStaffs() {
  
    return (
        <div className='forms'>
          <AddStaff />
        </div>
      );
}

export default AddStaffs;
