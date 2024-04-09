import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../../redux/actions/messAction';

const GetMessagesHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const res = useSelector((state) => state.messReducer.getMessages);

  useEffect(() => {
    setLoading(true);
    dispatch(getMessages());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      console.log(res.data);

      if (res.data) {
        if (res.status === 'success') {
          setData(res.data);
        }
      }
    }
  }, [res.data]);

  return [data, loading];
};

export default GetMessagesHook;
