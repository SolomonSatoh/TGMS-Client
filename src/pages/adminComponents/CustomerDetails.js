import React from 'react';
import Customer from "../.././components/Tables/Customer";
/**
 * It's a function that returns a div with a className of 'admins' and a Customer component.
 * @returns The CustomerDetails component is being returned.
 */
function CustomerDetails() {
  return (
    <div className='admins'>
      <Customer />
    </div>
  );
}

export default CustomerDetails;
