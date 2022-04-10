import React from 'react';
import BookingForm from "../.././components/Forms/BookingForm";

/**
 * The UserEntry function returns a div with the className 'forms' and the BookingForm component.
 * @returns The BookingForm component is being returned.
 */
function UserEntry() {
    return (
        <div className='forms'>
          <BookingForm />
        </div>
      );
}

export default UserEntry;
