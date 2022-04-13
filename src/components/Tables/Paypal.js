import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default function App(props) {
    console.log('Incoming data',props)
  const [state, setState] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={state}
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
        }}
      />
    </div>
  );
}
