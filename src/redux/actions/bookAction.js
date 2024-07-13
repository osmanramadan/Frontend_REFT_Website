import {
  RESERV_HALL_BY_HOUR,
  RESERV_HALL_BY_Days_Hours,
  RESERV_HALL_BY_INTERVAL_Days,
  RESERV_HALL_BY_INTERVAL_Hours,
  ADMIN_BOOKING_INFO,
  TEACHER_BOOKING_INFO,
  OWNER_BOOKING_INFO,
} from '../type';

import { useInsertData } from '../../crud/useInsertData';

import {
  _useGetDataToken,
  _useGetData,
  useGetData,
} from '../../crud/useGetData';

export const reservHallByHour = (search) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/halls/reservbyhour`);

    dispatch({
      type: RESERV_HALL_BY_HOUR,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: RESERV_HALL_BY_HOUR,
      payload: e.response,
    });
  }
};

export const reservHallIntervalDays = (search) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/halls/reservintervaldays`);

    dispatch({
      type: RESERV_HALL_BY_INTERVAL_Days,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: RESERV_HALL_BY_INTERVAL_Days,
      payload: e.response,
    });
  }
};

export const reservHallIntervalDaysHours = (search) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `/api/v1/halls/reservintervaldayshours`,
    );

    dispatch({
      type: RESERV_HALL_BY_Days_Hours,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: RESERV_HALL_BY_Days_Hours,
      payload: e.response,
    });
  }
};

export const reservHallByIntervalhours = (search) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/halls/reservintervalhours`);

    dispatch({
      type: RESERV_HALL_BY_INTERVAL_Hours,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: RESERV_HALL_BY_INTERVAL_Hours,
      payload: e.response,
    });
  }
};

export const adminbookinginfo = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/booking`);

    dispatch({
      type: ADMIN_BOOKING_INFO,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADMIN_BOOKING_INFO,
      payload: e.response,
    });
  }
};

export const teacherbookinginfo = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/booking/teacherbooking/${id}`);

    dispatch({
      type: TEACHER_BOOKING_INFO,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: TEACHER_BOOKING_INFO,
      payload: e.response,
    });
  }
};

export const ownerbookinginfo = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/booking/ownerbooking/${id}`);

    dispatch({
      type: OWNER_BOOKING_INFO,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: OWNER_BOOKING_INFO,
      payload: e.response,
    });
  }
};
