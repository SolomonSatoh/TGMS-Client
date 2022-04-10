import React from 'react';
import BarChart from '../.././components/Charts/BarChart';
/**
 * It returns a div with a BarChart component.
 * @returns A div with a BarChart component
 * for admin panel toll gate  statistics
 */
function Transactions() {
    return (
        <div className='admins'>
          <BarChart />
      
        </div>
      );
}

export default Transactions;
