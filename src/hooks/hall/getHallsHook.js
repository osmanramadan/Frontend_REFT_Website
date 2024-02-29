import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHalls, searchHalls } from '../../redux/actions/hallAction';

const GetHallsHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const res = useSelector((state) => state.hallReducer.getHalls);
  const search_res = useSelector((state) => state.hallReducer.searchHalls);

  const searchHall = () => {
    // setLoading(true);
    dispatch(searchHalls(search));
    // setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getHalls());
    setLoading(false);
  }, []);

  useEffect(() => {
    setData(search_res);
  }, [search_res]);

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

  return [data, loading, setSearch, search, searchHall];
};

export default GetHallsHook;
