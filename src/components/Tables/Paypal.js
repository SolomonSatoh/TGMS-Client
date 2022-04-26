import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { jsPDF } from "jspdf";
import { toast } from 'react-toastify';


export default function App(props) {
    console.log('Incoming data',props)
  const [state, setState] = useState(0);


  const exportToPdf = (data)=>{
    const doc = new jsPDF('p', 'mm', [100, 100]);      
    doc.text("TOLL ENTRY RECEIPT\n\nToll name : "+ data.tollName+ "\nPrice: MKW "+data.price+"\nDistric : "+data.district+"\nSection : "+data.section+ "\nVehicle Type : "+data.vehicleType + "\nReg Number : "+data.regNumber +"\nDate: "+data.createdAt, 1,20);  
    const date = new Date()
    doc.save("Toll Details"+date.getMilliseconds()+".pdf");
  }
 /**
 * The function is called when the user clicks the button. It then displays a message to the user.
 */
  toast.configure()
  const notify = () => {
    toast.success('Booking Was Successful, Take Receipt ', 
    {position: toast.POSITION.TOP_CENTER,
      autoClose:2000
    })
  };
  return (
    <div className="paypal">
      <h1> Confirm Payment</h1>
      <input
        type="number"
        value={props.tollDetails.price}
        onChange={(e) => setState(e.target.value)}
      />
      <PayPalButton
        options={{
          clientId: "ARlVJePUGyqQNik9uDOaMBhbAgSnvNaEsO4n_VkasvNz24aMO22XjDehB67OPmjPkfXS2KIOK9PtYq7u",
          currency: "USD",
        }}
        amount={props.tollDetails.price}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          console.log({ details, data });
          exportToPdf(props.tollDetails);
          notify();
        }}
      
      />
    </div>
  );
}
