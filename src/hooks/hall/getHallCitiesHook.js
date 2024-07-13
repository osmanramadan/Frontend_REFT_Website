import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHallsCities } from '../../redux/actions/hallAction';

const GetHallsCitiesHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);

  const res = useSelector((state) => state.hallReducer.getHallsCities);


  useEffect(() => {
    setLoading(true);
    dispatch(getHallsCities());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);

      if (res.status) {
        if (res.status == 'success') {
          setCities(res.cities);
        }
      }
    }
  }, [res.cities]);

  return [cities, loading];
};

export default GetHallsCitiesHook;
