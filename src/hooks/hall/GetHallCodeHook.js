import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HallCodes } from '../../redux/actions/bookAction';

const GetHallCodesHook = () => {
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const res = useSelector((state) => state.bookReducer.hallcodes);

  const GetHallCodes = (data) => {
    setLoading(true);
    dispatch(HallCodes(data));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if(res.data.validationError){
         window.location.href ='/'
         return;
      }
      if (res.data.status == 'success') {
        setData(res.data.codes);
      }
    }
  }, [res.data]);

  return [loading, GetHallCodes, data];
};

export default GetHallCodesHook;
