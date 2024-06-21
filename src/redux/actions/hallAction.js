import {
  GET_ALL_HALLS,
  ADD_HALL,
  SEARCH_HALLS,
  GET_ADMIN_HALLS,
  CHANGE_HALL_STATUS,
  GET_USER_HALLS,
  GET_HALLS_CITIES,
  _GET_HALL_RATE,
  ADD_HALL_RATE,
  ALLOWED_USER_RATE
} from '../type';
import { useInsertData } from '../../crud/useInsertData';
import { useInsUpdateData } from '../../crud/useUpdateData';
import { useGetDataToken, useGetData } from '../../crud/useGetData';




export const addNewRate = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/halls/addrate`, data);

    dispatch({
      type: ADD_HALL_RATE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_HALL_RATE,
      payload: e.response,
    });
  }
};

export const showUserRate = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/halls/showrate`, data);
    

    dispatch({
      type: ALLOWED_USER_RATE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ALLOWED_USER_RATE,
      payload: e.response,
    });
  }
};

// add new hall
export const addNewHall = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/halls/addhall`, data);

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
    console.log(response,'/api/v1/halls')
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

export const getHallsCities = (data) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/halls/cities`);


    dispatch({
      type: GET_HALLS_CITIES,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type:GET_HALLS_CITIES,
      payload: e.response,
    });
  }
};

export const getAdminHalls = (data) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/halls/getadminhalls`);

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
      v.city.toLowerCase().includes(search.split('/')[0].toLowerCase()) && v.location.toLowerCase().includes(search.split('/')[1].toLowerCase())
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

export const searchHallsCity = (city) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/halls`);
  
    const data = response.data.filter((v) =>
      v.city.toLowerCase().includes(city.toLowerCase())
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




