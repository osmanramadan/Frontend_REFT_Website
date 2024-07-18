import {
  ADMIN_BOOKING_INFO,
  TEACHER_BOOKING_INFO,
  OWNER_BOOKING_INFO,
  Get_Hall_CODES
} from '../type';


import {
  _useGetDataToken,
  _useGetData,
  useGetData
} from '../../crud/useGetData';


import { useInsertData } from '../../crud/useInsertData';

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
export const HallCodes = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/halls/hallcodes`, data);

    dispatch({
      type: Get_Hall_CODES,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: Get_Hall_CODES,
      payload: e.response,
    });
  }
};
