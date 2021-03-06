
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'

const DynamicChart = () => {
    const [chartData, setChartData]  = useState({});
    
 /* A function that is called when the component mounts. It is an asynchronous function that makes a
 call to the backend to get the data. The data is then manipulated to get the vehicle types and
 prices. The data is then set to the state of the chartData object. */
 const Chart = async() => {

   await axios.get("http://localhost:3001/bookings")
    .then(res => {
   
       console.log('Incoming data', res.data)
        var startArray = res.data, finalArray = [];

        startArray.forEach(function(e){
            if(!this[e.vehicleType]){
              this[e.vehicleType]  = {vehicleType: e.vehicleType, price: 0}
              finalArray.push(this[e.vehicleType]);
            }
            this[e.vehicleType].price += Number(e.price)
        }, {})

        /* Getting the vehicles and prices into separate arrays. */
        let vehicles = finalArray.map(vehicleCategory => vehicleCategory.vehicleType);
        let prices = finalArray.map(vehiclePrice => vehiclePrice.price)

        const totalPrice = prices.reduce(function(a,b){
            return a + b;
        }, 0);


       
        /* Setting the state of the chartData object. */
            setChartData({
                labels: vehicles,
                datasets: [{
                                             label: 'price per car category',
                                             data: prices,
                                             backgroundColor: [
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                             ],
                                             borderColor: [
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                             ],
                                             borderWidth: 1
                                         }]
            });
        })
        .catch(err =>{
            console.log(err);
        })
        
    }
    useEffect(() => {
        Chart();
      }, []);
      return(
          <div className="App">
             <h1> Total Amount  </h1>
              <div style={{ width : '80%', height : '100vh', display : 'inline-flex', position : 'fixed'}}>
                  <Bar
                    data={chartData}
                    options={{
                        responsive:true,
                        title: { text: "PRICE CONTRIBUTION PER VEHICLE CATEGORY", display: true },
                        scales:{
                            yAxes:{
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                        }
                    }}
                  />
              </div>
          </div>
      )
}

export default DynamicChart;