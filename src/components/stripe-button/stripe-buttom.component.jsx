import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 1000;
    const pubKey = 'pk_test_51KPFr1ClJ0jfYmIuwFofAYVBkAHfv6g7BPeikON6yV09C8D5kBTrmPBbAAFWSciH9BRXRuOxatL0zH3o0L2hu2Wq00caesCb0W';
    const onToken = token => {
        console.log(token);
        alert("Payment Succesful");
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Almond Store'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pubKey}
        />
    )
};

export default StripeCheckoutButton;