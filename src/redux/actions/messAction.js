import { ADD_MESSAGE, GET_ALL_MESSAGES, DELETE_MESSAGE } from '../type';
import { useInsertData } from '../../crud/useInsertData';
import { _useGetDataToken, useGetData } from '../../crud/useGetData';

export const addNewMessage = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/messages`, data);

    dispatch({
      type: ADD_MESSAGE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_MESSAGE,
      payload: e.response,
    });
  }
};

export const getMessages = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/messages`);

    dispatch({
      type: GET_ALL_MESSAGES,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_MESSAGES,
      payload: e.response,
    });
  }
};

export const delMessage = (id) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/messages/delete/${id}`);

    dispatch({
      type: DELETE_MESSAGE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DELETE_MESSAGE,
      payload: e.response,
    });
  }
};
