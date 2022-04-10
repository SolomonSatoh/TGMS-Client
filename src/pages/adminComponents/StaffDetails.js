import React from 'react';
import Staff from "../.././components/Tables/Staff";

/**
 * It's a function that returns a div with a className of 'admins' and a Staff component.
 * @returns The StaffDetails component is being returned.
 */
function StaffDetails() {
    return (
        <div className='admins'>
          <Staff />
          
        </div>
      );
}

export default StaffDetails;
