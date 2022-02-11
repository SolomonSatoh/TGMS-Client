import React from 'react';
import TollList from "../../components/TollList";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function TollDetail() {
  
    
    return (
        <div className='table'>
           <TollList />
          
        </div>
      );
}

export default TollDetail;
