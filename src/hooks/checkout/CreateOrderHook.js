import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateOrderPaypal } from '../../redux/actions/checkoutAction';

const CreateOrderHook = () => {
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.checkoutReducer.createorder);

  const CreateOrderAction = (data, amount) => {
    localStorage.setItem('bookinfo', JSON.stringify(data));
    setLoading(true);
    dispatch(CreateOrderPaypal(data, amount));
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

  return [loading, CreateOrderAction];
};

export default CreateOrderHook;
