import React from 'react';
import TollBookings from "../.././components/Tables/TollBookings";

//base component that shows all user toll booking entries in the staff panel
function AllEntry() {
    return (
        <div className='staffs'>
          <TollBookings />

        </div>
      );
}

export default AllEntry;
