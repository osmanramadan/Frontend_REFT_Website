import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewRate ,allowedUserRate} from '../../redux/actions/hallAction';


const AddHallRateHook = () => {

  const dispatch = useDispatch();

  if (localStorage.getItem('user') !== null) {
    var user = JSON.parse(localStorage.getItem('user'));
  } else {
    window.location.href = '/signin';
    return;
  }

  const [loading,setLoading]=useState(false)
  const [hallid,setHallId]=useState('')
  // const [checkuserrate,setCheckUserRate]=useState(false)

  const res = useSelector((state) => state.hallReducer.addHallRate);
  // const resallowuser = useSelector((state) => state.hallReducer.allowUserRate);


 

  const onChangeHallId =(id)=>{
    setHallId(id)
  }

  const onSubmit =(rate)=>{
    
    setLoading(true);
    dispatch(addNewRate({'userid':user.id,'hallid':hallid,'rate':rate}));
    setLoading(false);
  }

  // useEffect(()=>{
 
   
  //     setLoading(true);
  //     dispatch(allowedUserRate({'userid':user.id,'hallid':hallid}));
  //     setLoading(false);

  // },[hallid])


  useEffect(() => {

    setLoading(true);
    
    if (res.data) {

      if (res.data.status == 'success') {
        alert('نجاح الاضافة');
        return;

      } else {
        alert('انت بالفعل قمت بالتقييم');
        return;
      }
    }
  }, [res.data]);

  // useEffect(() => {

  //   setLoading(true);
    
  //   if (resallowuser.data) {
  //     console.log(resallowuser.data,'+++++++++++++++++++++++++++++++')
  //     if (resallowuser.data.status == 'success') {
       
  //       setCheckUserRate(true)

  //     } else {
  //       setCheckUserRate(false)
      
  //     }
  //   }
  // }, [resallowuser.data]);



  return [
    loading,
    onSubmit,
    onChangeHallId
  ];
};

export default AddHallRateHook;
