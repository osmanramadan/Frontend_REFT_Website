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
  const [checkuserrate,setCheckUserRate]=useState(false)

  const res = useSelector((state) => state.hallReducer.addHallRate);
  const resallowuser = useSelector((state) => state.hallReducer.allowUserRate);


 

  const onChangeHallId =(id)=>{
    setHallId(id)
  }

  const onSubmit =(rate)=>{
    
    setLoading(true);
    dispatch(addNewRate({'userid':user.id,'hallid':hallid,'rate':rate}));
    setLoading(false);
  }

  useEffect(()=>{
    setLoading(true);
    dispatch(allowedUserRate({"userid":user.id,"hallid":hallid}));
    setLoading(false);
  },[hallid])
  // console.log(res.data.status,'osmanmam')

  useEffect(() => {

    setLoading(true);
    
    if (res.data) {
   
      console.log(res.data.status,'osmanmam')
      if (res.data.status === 'success') {
        setLoading(false)
        alert('نجاح الاضافة');
        window.location.reload()

      } 
      
      if (res.data.status === 'fail') {
        setLoading(false)
        alert('انت بالفعل قمت بالتقييم');
        window.location.reload()

  
      } 
   
    }
  }, [res.data]);

  useEffect(() => {

    setLoading(true);
    
    if (resallowuser.data) {
      console.log(resallowuser.data,'+++++++++++++++++++++++++++++++')
      if (resallowuser.data.status == 'success') {
        setLoading(false)
        setCheckUserRate(true)

      } else {
        setLoading(false)
        setCheckUserRate(false)
      
      }
    }
  }, [resallowuser.data]);

 useEffect(()=>{
  console.log(checkuserrate,'(((((((((((((((((())))))))))))))))))))))))))))')
 },[checkuserrate])



  return [
    loading,
    checkuserrate,
    onSubmit,
    onChangeHallId
  ];
};

export default AddHallRateHook;
