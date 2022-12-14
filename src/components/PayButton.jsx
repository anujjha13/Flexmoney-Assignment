import React from 'react';
import RazorpayCheckout from 'razorpay-checkout';

class PayButton extends React.Component {
  handlePayment = async () => {
    const options = {
      key: 'rzp_test_GyTZBzRS5T24nZ',
      amount: 500,
      currency: 'INR',
      name: 'YOGA-FIT',
      description: 'Registration Fees (Monthly)',
      order_id: 'ORDER_ID_123',
    };

    try {
      const razorpay = new RazorpayCheckout(options);
      await razorpay.open();
    } catch (error) {
      // Handle payment errors here
    }
  };

  render() {
    return <button onClick={this.handlePayment}>Pay</button>;
  }
}

export default PayButton ;