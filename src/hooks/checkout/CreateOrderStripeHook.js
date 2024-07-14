import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateOrderStripe } from '../../redux/actions/checkoutAction';

const CreateOrderStripeHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.checkoutReducer.createorderstripe);

  const CreateOrderStripeAction = (data, amount) => {
    localStorage.setItem('bookinfo', JSON.stringify(data));
    setLoading(true);
    dispatch(CreateOrderStripe(data, amount));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data.status == 'success') {
        window.location.href = res.data.url ? res.data.url : '/';
      }
    }
  }, [res.data]);

  return [loading, CreateOrderStripeAction];
};

export default CreateOrderStripeHook;
