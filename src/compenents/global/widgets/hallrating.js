import React, {useState } from 'react';
import StarRatings from 'react-star-ratings';

const Hallrating = ({onsend, starDimension = "25px", starSpacing = "2px" }) => {

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
      changeRating={changeRating}
      numberOfStars={5}
      name='rating'
      starDimension={starDimension}
      starSpacing={starSpacing}
    />
  );
};

export default Hallrating;
