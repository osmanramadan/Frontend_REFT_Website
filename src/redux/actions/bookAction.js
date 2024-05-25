import {
    RESERV_HALL_BY_HOUR ,
    RESERV_HALL_BY_Days_Hours,
    RESERV_HALL_BY_INTERVAL_Days,
    RESERV_HALL_BY_INTERVAL_Hours
  
  } from '../type';

  import { useInsertData } from '../../crud/useInsertData';
//   import { useInsUpdateData } from '../../crud/useUpdateData';
  import { _useGetDataToken, _useGetData } from '../../crud/useGetData';
  

export const reservHallByHour = (search) => async (dispatch) => {
    try {
      const response = await useInsertData(`/api/v1/halls/reservbyhour`);
  
      dispatch({
        type:RESERV_HALL_BY_HOUR,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type:RESERV_HALL_BY_HOUR,
        payload: e.response,
      });
    }
  };
  
  export const reservHallIntervalDays = (search) => async (dispatch) => {
    try {
      const response = await useInsertData(`/api/v1/halls/reservintervaldays`);
  
      dispatch({
        type:RESERV_HALL_BY_INTERVAL_Days,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type:RESERV_HALL_BY_INTERVAL_Days,
        payload: e.response,
      });
    }
  };

  export const reservHallIntervalDaysHours = (search) => async (dispatch) => {
    try {
      const response = await useInsertData(`/api/v1/halls/reservintervaldayshours`);
  
      dispatch({
        type:RESERV_HALL_BY_Days_Hours,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type:RESERV_HALL_BY_Days_Hours,
        payload: e.response,
      });
    }
  };

  export const reservHallByIntervalhours = (search) => async (dispatch) => {
    try {
      const response = await useInsertData(`/api/v1/halls/reservintervalhours`);
  
      dispatch({
        type:RESERV_HALL_BY_INTERVAL_Hours,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type:RESERV_HALL_BY_INTERVAL_Hours,
        payload: e.response,
      });
    }
  };