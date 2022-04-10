import React from 'react';
import TollList from "../../components/TollList";
/**
 * TollDetail is a function that returns a div with a className of table, and inside that div is a
 * TollList component.
 * @returns A TollList component.
 */
function TollDetail() {
  return (
        <div className='table'>
           <TollList />
          
        </div>
      );
}

export default TollDetail;
