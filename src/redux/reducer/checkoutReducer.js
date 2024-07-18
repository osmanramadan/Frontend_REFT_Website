import {
  CREATE_ORDER,
  CREATE_ORDER_STRIPE,
  CHECK_ORDER_COMPLETE,
  CHECK_ORDER_COMPLETE_STRIPE,
} from '../type';

const inital = {
  createorder: [],
  createorderstripe: [],
  checkordercomplete: [],
  checkordercompletestripe: [],

};

const checkoutReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        createorder: action.payload,
      };
    case CREATE_ORDER_STRIPE:
      return {
        ...state,
        createorderstripe: action.payload,
      };
    case CHECK_ORDER_COMPLETE:
      return {
        ...state,
        checkordercomplete: action.payload,
      };
    case CHECK_ORDER_COMPLETE_STRIPE:
      return {
        ...state,
        checkordercompletestripe: action.payload,
      };


    default:
      return state;
  }
};
export default checkoutReducer;
