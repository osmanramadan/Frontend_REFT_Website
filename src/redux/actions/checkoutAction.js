import {CREATE_ORDER,CHECK_ORDER_COMPLETE,Get_Hall_CODES} from '../type';
import { useInsertData } from '../../crud/useInsertData';
import {
  _useGetDataToken,
  _useGetData
} from '../../crud/useGetData';

export const CreateOrder = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/checkout/createorder`, data);
    

    dispatch({
      type:CREATE_ORDER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER ,
      payload: e.response,
    });
  }
};


export const CheckComplete = (id,data,type) => async (dispatch) => {

  try {
    
    const response = await useInsertData(`/api/v1/checkout/capturepayment?token=${id}`,data,type);
 

  
    dispatch({
      type:CHECK_ORDER_COMPLETE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type:CHECK_ORDER_COMPLETE,
      payload: e.response,
    });
  }
};


export const HallCodes = (data) => async (dispatch) => {

  try {
    
    const response = await useInsertData(`/api/v1/checkout/hallcodes`,data);
 
    dispatch({
      type:Get_Hall_CODES,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type:Get_Hall_CODES,
      payload: e.response,
    });
  }
};
