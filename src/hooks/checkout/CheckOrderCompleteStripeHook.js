import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCompleteStripe } from '../../redux/actions/checkoutAction';

const CheckOrderCompleteStripeHook = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, _setData] = useState(
    localStorage.getItem('bookinfo')
      ? JSON.parse(localStorage.getItem('bookinfo'))
      : [],
  );

  const res = useSelector((state) => state.checkoutReducer.checkordercompletestripe);
  const url = new URL(window.location.href);
  const session = url.searchParams.get('session_id');



  const CheckOrderCompleteStripe =async () => {
    setLoading(true);
    dispatch(CheckCompleteStripe(session,data));
    setLoading(false);
  };


  

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data) {
        if (res.data.status === 'success') {
          const userConfirmed = confirm(
            'Payment was successful. Do you want to back?',
          );
          if (userConfirmed) {
            window.history.go(-4);
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

  return [loading, CheckOrderCompleteStripe];
};

export default CheckOrderCompleteStripeHook;
