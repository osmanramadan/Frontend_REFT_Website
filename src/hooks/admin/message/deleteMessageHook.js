import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delMessage } from '../../../redux/actions/messAction';

const DeleteMessageHook = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const onSubmit = async (id) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this Message?',
    );

    if (!isConfirmed) {
      return;
    }
    setLoading(true);
    dispatch(delMessage(id));
    setLoading(false);
  };

  const res = useSelector((state) => state.messReducer.deleteMessage);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data) {
        if (res.data.validationError) {
          return;
        }
        if (res.data.status == 'success') {
          location.reload('/admin-messages');
          return;
        } else {
          alert('Error in adding message');
          return;
        }
      }
    }
  }, [res.data]);

  return [onSubmit, loading];
};

export default DeleteMessageHook;
