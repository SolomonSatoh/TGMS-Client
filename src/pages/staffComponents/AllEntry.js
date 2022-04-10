import React from 'react';
import TollBookings from "../.././components/Tables/TollBookings";

/**
 * AllEntry() is a function that returns a div with a className of 'staffs' and a child component of
 * TollBookings()
 * @returns The TollBookings component is being returned.
 */
function AllEntry() {
    return (
        <div className='staffs'>
          <TollBookings />

        </div>
      );
}

export default AllEntry;
