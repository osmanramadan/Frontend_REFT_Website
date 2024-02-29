import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserHalls } from '../../redux/actions/hallAction';

const GetUserHallsHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const res = useSelector((state) => state.hallReducer.getUserHalls);

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      var user = JSON.parse(localStorage.getItem('user'));
    }
    {
      console.log(
        user.id,
        '###################################%%%%%%%%%%%%%%%%%%%%%%%%%%%%^^^^^^^^^^^^',
      );
    }
    setLoading(true);
    dispatch(getUserHalls(user.id));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);

      if (res.status) {
        if (res.status === 'success') {
          setData(res.data);
        }
      }
    }
  }, [res.data]);

  return [data, loading];
};

export default GetUserHallsHook;
