import { useState } from 'react';

const ReservHallIntervalDaysHoursHook = () => {
  const [dateonemix, setDateOneMix] = useState('');
  const [datetwomix, setDateTwoMix] = useState('');
  const [hourfrommix, setHourFromMix] = useState('9:00');
  const [hourtomix, setHourToMix] = useState('9:00');

  const onChangeDateOneMix = (e) => {
    setDateOneMix(e.target.value);
  };

  const onChangeDateTwoMix = (e) => {
    setDateTwoMix(e.target.value);
  };

  const onChangeHoursFromMix = (e) => {
    setHourFromMix(e.target.value);
  };
  const onChangeHoursToMix = (e) => {
    setHourToMix(e.target.value);
  };

  return [
    onChangeDateOneMix,
    onChangeDateTwoMix,
    onChangeHoursFromMix,
    onChangeHoursToMix,
    dateonemix,
    datetwomix,
    hourfrommix,
    hourtomix,
  ];
};

export default ReservHallIntervalDaysHoursHook;
