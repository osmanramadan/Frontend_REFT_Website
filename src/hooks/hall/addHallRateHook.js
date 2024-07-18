import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewRate, showUserRate } from '../../redux/actions/hallAction';
import ProtectedRouteHook from '../auth/protectedRoutedHook';

const AddHallRateHook = () => {
  const [_isuser, _isadmin, userdata, _load] = ProtectedRouteHook();
  const [userinfo, setUserInfo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      var user = JSON.parse(localStorage.getItem('user'));
      setUserInfo(user);
    }
  }, [userdata]);



  const [loading, setLoading] = useState(false);
  const [hallid, setHallId] = useState('');
  const [checkuserrate, setCheckUserRate] = useState(true);

  const res = useSelector((state) => state.hallReducer.addHallRate);
  const resallowuser = useSelector((state) => state.hallReducer.allowUserRate);

  const onChangeHallId = (id) => {
    setHallId(id);
  };

  const onSubmit = (rate) => {

    if(isNaN(userinfo.id)){
      window.location.href ='/'
    }
    if(isNaN(hallid)){
      window.location.href ='/'
    }
    if(isNaN(rate)){
      window.location.href ='/'
    }
    setLoading(true);
    dispatch(addNewRate({userid:userinfo.id,hallid:hallid,rate:rate}));
    setLoading(false);
  };

  useEffect(() => {

    // if(isNaN(userinfo.id)){
    //   window.location.href ='/'
    // }
    // if(isNaN(hallid)){
    //   window.location.href ='/'
    // }
    setLoading(true);
    dispatch(showUserRate({ userid: userinfo.id, hallid: hallid }));
    setLoading(false);
  }, [hallid]);

  useEffect(() => {
    setLoading(true);

    if (res.data) {
      setLoading(false);

      if (res.data.status === 'success') {
        alert('نجاح الاضافة');
        window.location.reload();
      }

      if (res.data.status === 'fail') {
        alert('انت بالفعل قمت بالتقييم');
        window.location.reload();
      }

      if (res.data.validationError) {
        window.location.href ='/'
      }
    }
  }, [res.data]);

  useEffect(() => {
    setLoading(true);

    if (resallowuser.data) {
      setLoading(false);

      if (resallowuser.data.status == 'success') {
        setCheckUserRate(true);
      } else {
        setCheckUserRate(false);
      }
    }
  }, [resallowuser.data]);

  return [loading, checkuserrate, onSubmit, onChangeHallId];
};

export default AddHallRateHook;
