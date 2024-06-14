import React, {useState } from 'react';
import StarRatings from 'react-star-ratings';
import AddHallRateHook from '../../../hooks/hall/addHallRateHook';

const Hallrating = ({onsend, starDimension = "25px", starSpacing = "2px" }) => {
//   const  [
    
//     load,
//     onSend,
//     onChangeHallId
// ]= AddHallRateHook()

  const [rating, setRating] = useState('');



  const changeRating = (newRating,_name) => {
    setRating(Number(newRating))
    onsend(Number(newRating));
    return;
  };

  return (
    <StarRatings
      rating={Number(rating)}
      starHoverColor='#1C1E53'
      starRatedColor="#C9981C"
      // changeRating={onSend}
      changeRating={changeRating}
      numberOfStars={5}
      name='rating'
      starDimension={starDimension}
      starSpacing={starSpacing}
    />
  );
};

export default Hallrating;

// import React, {useState } from 'react';
// import StarRatings from 'react-star-ratings';
// import AddHallRateHook from '../../../hooks/hall/addHallRateHook';

// const Hallrating = ({onsend, starDimension = "25px", starSpacing = "2px" }) => {
// //   const  [
    
// //     load,
// //     onSend,
// //     onChangeHallId
// // ]= AddHallRateHook()

//   const [rating, setRating] = useState('');



//   const changeRating =(newRating,_name) => {
//     setRating(Number(newRating))
//     // alert("success")
//    onsend(Number(newRating));
//     return;
//   };

//   return (
//     <div onClick={changeRating}>rate</div>
//   );
// };

// export default Hallrating;
