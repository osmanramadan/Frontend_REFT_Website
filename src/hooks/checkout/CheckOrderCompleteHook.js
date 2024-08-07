import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCompletePaypal } from '../../redux/actions/checkoutAction';

const CheckOrderCompleteHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, _setData] = useState(
    localStorage.getItem('bookinfo')
      ? JSON.parse(localStorage.getItem('bookinfo'))
      : [],
  );

  const res = useSelector((state) => state.checkoutReducer.checkordercomplete);
  const url = new URL(window.location.href);
  const token = url.searchParams.get('token');

  const CheckOrderComplete = () => {
    setLoading(true);
    dispatch(CheckCompletePaypal(token, data));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data) {

        if (res.data.validationError) {
           window.location.href='/'
           return;
        }
        if (res.data.status === 'success') {
          const userConfirmed = confirm(
            'Payment was successful. Do you want to back?',
          );
          if (userConfirmed) {
            window.history.go(-3);
          } else {
            window.location.href = '/places';
          }
          return;
        } else {
          alert(' خطا فى عملية الدفع حاول مره أخري');
          window.location.href = '/places';
        }
      }
    }
  }, [res.data]);

  return [loading, CheckOrderComplete];
};

export default CheckOrderCompleteHook;
