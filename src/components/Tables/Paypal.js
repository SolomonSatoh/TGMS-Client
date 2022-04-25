import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { jsPDF } from "jspdf";

export default function App(props) {
    console.log('Incoming data',props)
  const [state, setState] = useState(0);


  const exportToPdf = (data)=>{
    const doc = new jsPDF('p', 'mm', [100, 100]);      
    doc.text("TOLL ENTRY RECEIPT\n\nToll name : "+ data.name+ "\nPrice: MKW "+data.price+"\nDistric : "+data.district+"\nSection : "+data.section+ "\nVehicle Type : "+data.vehicleType + "\nReg Number : "+data.regNumber, 1,20);  
    const date = new Date()
    doc.save("Toll Details"+date.getMilliseconds()+".pdf");
  }

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
          exportToPdf(props.tollDetails)
        }}
      
      />
    </div>
  );
}
