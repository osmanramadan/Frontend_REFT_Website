import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeHallStatus } from '../../../redux/actions/hallAction';

const ChangeHallStatusHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('waiting');

  const onChangeStatus = (v) => {
    setStatus(v);
  };

  const res = useSelector((state) => state.hallReducer.hallStatus);

  const onSubmit = (id) => {
    setLoading(true);
    dispatch(changeHallStatus({ id: id, checked: status }));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    if (res.data) {
      if (res.data.status === 'success') {
        alert('نجاح التعديل');
        return;
      } else {
        alert('فشل التعديل');
        return;
      }
    }
  }, [res.data]);

  return [onSubmit, status, onChangeStatus, loading];
};
export default ChangeHallStatusHook;
