import React, { useEffect } from "react";

function PayPalButton() {
  useEffect(() => {
    const loadPayPalScript = async () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Set the amount here
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              alert("Transaction completed by " + details.payer.name.given_name);
            });
          },
        }).render("#paypal-button-container");
      }
    };

    loadPayPalScript();
  }, []);

  return <div id="paypal-button-container"></div>;
}

export default PayPalButton;
