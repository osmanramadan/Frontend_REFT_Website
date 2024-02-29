import {
  GET_ALL_HALLS,
  ADD_HALL,
  SEARCH_HALLS,
  GET_ADMIN_HALLS,
  CHANGE_HALL_STATUS,
  GET_USER_HALLS,
} from '../type';
import { useInsertData } from '../../crud/useInsertData';
import { useInsUpdateData } from '../../crud/useUpdateData';
import { _useGetDataToken, useGetData } from '../../crud/useGetData';

// add new hall
export const addNewHall = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/halls/addhall`, data);
    console.log(response);

    dispatch({
      type: ADD_HALL,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_HALL,
      payload: e.response,
    });
  }
};

export const getHalls = (data) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/halls`);
    console.log(response);

    dispatch({
      type: GET_ALL_HALLS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_HALLS,
      payload: e.response,
    });
  }
};

export const getAdminHalls = (data) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/halls/getadminhalls`);
    console.log(response);

    dispatch({
      type: GET_ADMIN_HALLS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ADMIN_HALLS,
      payload: e.response,
    });
  }
};

export const getUserHalls = (userid) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/halls/${userid}`);
    console.log(response);

    dispatch({
      type: GET_USER_HALLS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_USER_HALLS,
      payload: e.response,
    });
  }
};

export const searchAdminHalls = (search) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/halls/getadminhalls`);
    const data = response.data.filter((v) =>
      v.city.toLowerCase().includes(search.toLowerCase()),
    );

    dispatch({
      type: SEARCH_HALLS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: SEARCH_HALLS,
      payload: e.response,
    });
  }
};

export const changeHallStatus = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/halls`, data);
    console.log(response, 'changeHallStatu/changeHallStatu/changeHallStatu');

    dispatch({
      type: CHANGE_HALL_STATUS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: CHANGE_HALL_STATUS,
      payload: e.response,
    });
  }
};

export const searchHalls = (search) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/halls`);
    const data = response.data.filter((v) =>
      v.city.toLowerCase().includes(search.toLowerCase()),
    );

    dispatch({
      type: SEARCH_HALLS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: SEARCH_HALLS,
      payload: e.response,
    });
  }
};
