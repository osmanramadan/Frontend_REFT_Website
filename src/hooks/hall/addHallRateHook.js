import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewRate ,showUserRate} from '../../redux/actions/hallAction';


const AddHallRateHook = () => {

  const dispatch = useDispatch();

  try{
    
    if (localStorage.getItem('user') !== null) {
      var user = JSON.parse(localStorage.getItem('user'));
    } else {
      window.location.href = '/signin';
      return;
    }
  }catch(e){
    window.location.href = '/signin';
    return;
  }

  const [loading,setLoading]=useState(false)
  const [hallid,setHallId]=useState('')
  const [checkuserrate,setCheckUserRate]=useState(true)

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
    dispatch(showUserRate({"userid":user.id,"hallid":hallid}));
    setLoading(false);
  },[hallid])
  

  useEffect(() => {

    setLoading(true);
    
    if (res.data) {
   
      setLoading(false)
      if (res.data.status === 'success') {
        alert('نجاح الاضافة');
        window.location.reload()

      } 
      
      if (res.data.status === 'fail') {
        alert('انت بالفعل قمت بالتقييم');
        window.location.reload()

  
      } 
   
    }
  }, [res.data]);

  useEffect(() => {

    setLoading(true);
    
    if (resallowuser.data) {
      setLoading(false)
      
      if (resallowuser.data.status == 'success') {
        
        setCheckUserRate(true)

      } else {
     
        setCheckUserRate(false)
      
      }
    }
  }, [resallowuser.data]);


  return [
    loading,
    checkuserrate,
    onSubmit,
    onChangeHallId
  ];
};

export default AddHallRateHook;
