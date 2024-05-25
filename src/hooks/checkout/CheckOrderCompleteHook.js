import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckComplete } from '../../redux/actions/checkoutAction';



const CheckOrderCompleteHook = () => {

  const dispatch = useDispatch();0
  const [loading, setLoading] = useState(true);
  const [data, _setData] = useState(localStorage.getItem('bookinfo')?JSON.parse(localStorage.getItem('bookinfo')):[])
 

  
  const res = useSelector((state) => state.checkoutReducer.checkordercomplete);

  const url = new URL(window.location.href);


  const token = url.searchParams.get('token');

 
  const CheckOrderComplete = () => {
    setLoading(true);
    dispatch(CheckComplete(token,data));
    setLoading(false);
  };


 

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
          if(res.data){
          
              if (res.data.status === 'success') {
                alert('success');
                return;
              } else {
                alert(' خطا فى عملية الدفع حاول مره أخري');
                window.location.href = document.referrer || '/';
              }
          }
    }
  }, [res.data]);

  return [loading, CheckOrderComplete];
};

export default CheckOrderCompleteHook;
