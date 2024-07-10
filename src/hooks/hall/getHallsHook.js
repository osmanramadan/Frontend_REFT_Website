import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getHalls,
  searchHalls,
  searchHallsCity,
} from '../../redux/actions/hallAction';
import axios from 'axios';


const GetHallsHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [city, setCity] = useState('');
  const [town, setTown] = useState('');

  const res = useSelector((state) => state.hallReducer.getHalls);
  const search_res = useSelector((state) => state.hallReducer.searchHalls);

  const onChangeCity = (value) => {
    if (value === 'all') {
      setData(res.data);
    } else {
      let newdata = [];
      value['city'].forEach((v) => {
        const filtered = data.filter((dt) => {
          return dt.city.toLowerCase().includes(v.toLowerCase());
        });
        newdata.push(...filtered);
      });

      const uniqueFiltered = [...new Set([...newdata])];
      setData([...uniqueFiltered]);
    }
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getHalls());
    setLoading(false);
  }, []);

  

  useEffect(() => {
    if (town === '' || city === '') {
      setData(res.data);
      return;
    }

    setLoading(true);
    dispatch(searchHalls(`${city}/${town.en}`));
    setLoading(false);
  }, [town, city]);

  useEffect(() => {
    setLoading(true);
    dispatch(searchHallsCity(city));
    setLoading(false);
  }, [city]);

  useEffect(() => {
    setData(search_res);
  }, [search_res]);

  console.log(res, '(*********)');
  try {
    useEffect(() => {
      if (loading === false) {
        setLoading(true);

        if (res.status) {
          if (res.status === 'success') {
            setData(res.data);
            // location.replace(res.data)
          }
        }
        // if (res.data.status === 'forbidden') {

        //   localStorage.removeItem('token');
        //   localStorage.removeItem('user');
        //   localStorage.getItem('id')?localStorage.removeItem('id'):null;
        //   window.location.href ='/signin'
        //   return;
        // }
      }
    }, [res.data, res.status]);
  } catch (e) {
    window.location.href = '/signin';
    return;
  }
  return [data, loading, setTown, town, setCity, city, onChangeCity];
};

export default GetHallsHook;
