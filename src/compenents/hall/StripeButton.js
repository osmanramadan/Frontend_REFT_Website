import React from 'react';
import stripebanner from '../../assets/images/stripebanner.png';
import CreateOrderStripeHook from '../../hooks/checkout/CreateOrderStripeHook';

const StripeButton = ({ amount, data }) => {
  const [load, CreateOrderStripeAction] = CreateOrderStripeHook();

  const CreateOrder = () => {
    CreateOrderStripeAction({ data: data, amount: amount });
  };

  return (
    <div className="mb-2">
      {!load && (
        <div className="spinner-border text-custom" role="status"></div>
      )}

      <img
        height={50}
        onClick={CreateOrder}
        style={{ cursor: 'pointer', borderRadius: '20px' }}
        src={stripebanner}
        alt="stripe Button"
      />
    </div>
  );
};

export default StripeButton;
