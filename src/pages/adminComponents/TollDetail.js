import React from 'react';
import TollDetails from "../.././components/Tables/TollDetails";
/**
 * It returns a div with the className 'admins' and inside that div it returns the TollDetails
 * component.
 * @returns A function that returns a div with a TollDetails component.
 */
function TollDetail() {
    return (
        <div className='admins'>
           <TollDetails />
          
        </div>
      );
}

export default TollDetail;
