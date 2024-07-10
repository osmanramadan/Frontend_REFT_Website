import { CREATE_ORDER, CHECK_ORDER_COMPLETE, Get_Hall_CODES } from '../type';

const inital = {
  createorder: [],
  checkordercomplete: [],
  hallcodes: [],
};

const checkoutReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        createorder: action.payload,
      };
    case CHECK_ORDER_COMPLETE:
      return {
        ...state,
        checkordercomplete: action.payload,
      };

    case Get_Hall_CODES:
      return {
        ...state,
        hallcodes: action.payload,
      };

    default:
      return state;
  }
};
export default checkoutReducer;
