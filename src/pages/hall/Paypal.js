// import React, { useState } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const PayPalButton = ({ amount }) => {
//   const [paidFor, setPaidFor] = useState(false);
//   const [error, setError] = useState(null);

//   const paypalRef = React.createRef();

//   const handlePayment = () => {
//     window.paypal
//       .Buttons({
//         createOrder: (data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: 100,
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: async (data, actions) => {
//           const order = await actions.order.capture();
//           setPaidFor(true);
//           console.log(order);
//         },
//         onError: (err) => {
//           setError(err);
//           console.error(err);
//         },
//       })
//       .render(paypalRef.current);
//   };

//   if (paidFor) {
//     return <div>Payment successful! Thank you for your purchase.</div>;
//   }

//   return (
//     <div>
//       {error && <div>An error occurred: {error.message}</div>}
//       <div ref={paypalRef} onClick={handlePayment} />
            
//                  <PayPalScriptProvider options={{ 'client-id': 'AcM2S3JDjhjYggmSawITCRfsKnA4RvMhF0KAcM-zNgEeOvDOWZT4BxWV18REbprXWXhqxFkdoWppC9N9' }}>
//                      <PayPalButtons />
//                  </PayPalScriptProvider>
          
//     </div>
//   );
// };

// export default PayPalButton;


// import React, { useEffect, useState } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// function PayPalButton() {
//     const [sdkLoaded, setSdkLoaded] = useState(false);

//     useEffect(() => {
//         // Load PayPal SDK script dynamically
//         const script = document.createElement('script');
//         script.src = 'https://www.paypal.com/sdk/js?client-id=AdclrXp4eMBG3Ew9EtTohMKqxTRV0TLCk2CbloyVJ3QrjU5-IQI6TKdGBu6afGHGoa3YamNCuTN2q1-g';
//         script.async = true;
//         script.onload = () => {
//             setSdkLoaded(true); // Set loaded state to true once script is loaded
//         };
//         document.body.appendChild(script);

//         return () => {
//             // Check if the script exists in the DOM before trying to remove it
//             if (document.body.contains(script)) {
//                 document.body.removeChild(script);
//             }
//         };
//     }, []);

//     // Render PayPalButtons only when the SDK script is loaded
//     return (
//         <div>
//             {sdkLoaded && (
//                 <PayPalScriptProvider options={{ 'client-id': 'AcM2S3JDjhjYggmSawITCRfsKnA4RvMhF0KAcM-zNgEeOvDOWZT4BxWV18REbprXWXhqxFkdoWppC9N9' }}>
//                     <PayPalButtons />
//                 </PayPalScriptProvider>
//             )}
//         </div>
//     );
// }

// export default PayPalButton;



// import React, { useEffect, useState } from 'react';

// const PayPalButton = () => {
//   const [isSdkLoaded, setIsSdkLoaded] = useState(false);

//   useEffect(() => {
//     if (!isSdkLoaded) {
//       const script = document.createElement('script');
//       script.src = 'https://www.paypal.com/sdk/js?client-id=AdclrXp4eMBG3Ew9EtTohMKqxTRV0TLCk2CbloyVJ3QrjU5-IQI6TKdGBu6afGHGoa3YamNCuTN2q1-g';
//       script.addEventListener('load', () => {
//         // Once the PayPal SDK script is loaded, set isSdkLoaded to true
//         setIsSdkLoaded(true);
//       });
//       document.body.appendChild(script);

//       // Clean up function to remove the script when component unmounts
//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, [isSdkLoaded]);

//   useEffect(() => {
//     if (isSdkLoaded) {
//       // Initialize the PayPal button only if the SDK is loaded
//       window.paypal.Buttons({
//         createOrder: function(data, actions) {
//           return actions.order.create({
//             purchase_units: [{
//               amount: {
//                 value: '10.00' // Replace with your desired total amount
//               }
//             }]
//           });
//         },
       
//         onApprove: function(data, actions) {
//           return actions.order.capture().then(function(details) {
//             alert('Transaction completed by ' + details.payer.name.given_name);
//             // Optionally, you can perform additional actions after successful transaction
//           });
//         }
//       }).render('#paypal-container');
//     }
//   }, [isSdkLoaded]);

//   return <div onClick={()=>{}} id="paypal-container"></div>;
// };

// export default PayPalButton;



// PayPalButton.js
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



const PayPalButton = () => {
  return (
    <PayPalScriptProvider options={{ "AdclrXp4eMBG3Ew9EtTohMKqxTRV0TLCk2CbloyVJ3QrjU5-IQI6TKdGBu6afGHGoa3YamNCuTN2q1-g": "EB2zVfNYMpz9ugCB7HuCWKP30XzLUDItD0XxRScgWXgEEnwaNwf7QtAu1TwM5j_iq97sypySOzEJxXLL" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value:"1200" // Replace with your desired total amount
              }
            }]
          });
        }}
        onCancel={
        ()=>{
            alert("Cancel -------------")
        }
        }
        onApprove={(data, actions) => {

            alert("Success")
        
        //   return actions.order.capture().then(function(details) {
        //     alert('Transaction completed by ' + details.payer.name.given_name);
        //     // Optionally, you can perform additional actions after successful transaction
        //   });
        }}
        onError={(e)=>{
            alert("Error",e)
        }}

      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
