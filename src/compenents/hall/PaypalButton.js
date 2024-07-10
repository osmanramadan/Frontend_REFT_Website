import React from 'react';
import paypal from '../../assets/images/paypal.jpg';
import CreateOrderHook from '../../hooks/checkout/CreateOrderHook';

const PayPalButton = ({ amount, data }) => {
  const [load, CreateOrderAction] = CreateOrderHook();

  const CreateOrder = () => {
    CreateOrderAction({ data: data, amount: amount });
  };

  return (
    <div>
      {!load && (
        <div className="spinner-border text-custom" role="status"></div>
      )}
      <img
         height={30}
        onClick={CreateOrder}
        style={{ cursor: 'pointer', borderRadius: '20px' }}
        src={paypal}
        alt="PayPal Button"
      />
    </div>
  );
};

export default PayPalButton;
