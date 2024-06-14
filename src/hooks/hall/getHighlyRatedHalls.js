// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getHalls} from '../../redux/actions/hallAction';



// const GetHighlyRatedHalls= () => {

//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [highRated,setHighRated]=useEffect([])

//   const res = useSelector((state) => state.hallReducer.getHalls);

//   console.log(res,'************')



//   useEffect(() => {
//     setLoading(true);
//     dispatch(getHalls());
//     setLoading(false);
//   }, []);

//   useEffect(()=>{
//     if (data.length > 0) {
//         const filteredHalls = data.filter(hall => hall.rate = '5' && hall.city === 'Cairo');
//         setHighRated(filteredHalls);
//     }
//     // setHighRated()
//   },[data])
// //   console.log(filteredHalls,data,'====================++++++++++++++++++++++++++s+')


//   useEffect(() => {
//     if (loading === false) {
//       setLoading(true);
//       console.log(res)
//       if (res.status) {
//         if (res.status === 'success') {
//           setData(res.data);
        
//         }
//       }
//     }
//   }, [res.data]);

//   return [data,loading];
// };

// export default GetHighlyRatedHalls;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHalls} from '../../redux/actions/hallAction';



const GetHighlyRatedHalls= () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [highlyRatedPlaces, setHighlyRatedPlaces] = useState([]);
  
    const res = useSelector((state) => state.hallReducer.getHalls);
    // let user;
  
    useEffect(() => {
      setLoading(true);
      dispatch(getHalls());
      setLoading(false);
    }, []);

    useEffect(()=>{
        if (localStorage.getItem('user') !== null) {
            let user = JSON.parse(localStorage.getItem('user'));
            setUser(user)
          }
    },[])


    useEffect(() => {
        if (data.length > 0) {
          const sortedHalls = data
          .filter(hall => hall.city.toLowerCase().includes(user?.city))
            .map(hall => ({
              ...hall,
              averageRating: hall.rate.numstar > 0 ? hall.rate.sumstar / hall.rate.numstar : 0
            }))
            .sort((a, b) => b.averageRating - a.averageRating);
    
          const highestRatedHalls = sortedHalls.filter(hall => hall.averageRating > 0);
          if(highestRatedHalls.length > 0){
            setHighlyRatedPlaces(highestRatedHalls);
          }else{
            const sortedHalls = data
              .map(hall => ({
                ...hall,
                averageRating: hall.rate.numstar > 0 ? hall.rate.sumstar / hall.rate.numstar : 0
              }))
              .sort((a, b) => b.averageRating - a.averageRating);
      
            const highestRatedHalls = sortedHalls.filter(hall => hall.averageRating > 0);
            setHighlyRatedPlaces(highestRatedHalls)
          }
          
        } else {
          setHighlyRatedPlaces([]);
        }
      }, [data]);
  
    useEffect(() => {
      if (loading === false) {
        setLoading(true);
  
        if (res.status) {
          if (res.status === 'success') {
            console.log(res.data,'-----------=========')
            setData(res.data);
          }
        }
      }
    }, [res.data]);
  
    return [highlyRatedPlaces, loading];
  };

export default GetHighlyRatedHalls;



