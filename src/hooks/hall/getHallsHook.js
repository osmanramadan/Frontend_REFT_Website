import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHalls, searchHalls } from '../../redux/actions/hallAction';
import { useTranslation } from 'react-i18next';

const GetHallsHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  // const [selectedCity,setSelectedCity]=useEffect([])
  const [search, setSearch] = useState('');

  const res = useSelector((state) => state.hallReducer.getHalls);
  const search_res = useSelector((state) => state.hallReducer.searchHalls);

  const searchHall = () => {
    dispatch(searchHalls(search));
  };

  // const onChangeCity =(v)=>{
  //    setSelectedCity(v)
  // }

  const onChangeCity = (value) => {
    
    if (value === 'all') {
      setData(data)
    } else {

      let newdata=[]
      console.log(value,'((((((((((((((00000000000000)))))))))))))))))))))))))))')

      value['city'].forEach((v) => {
        
        const filtered = data.filter((dt)=>{
        
          //  if(dt.city.split('-')){

          //     return  i18n.language === 'en' ? dt.city.split('-')[0]:dt.city.split('-')[1]
                
          //  }
          
           return dt.city === v
          }
      );
      console.log(...filtered)
        newdata.push(...filtered);
      });

      const uniqueFiltered = [...new Set([...newdata])];
      setData(uniqueFiltered);
    }
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

  return [data, loading, setSearch, search, searchHall,onChangeCity];
};

export default GetHallsHook;



