import { ADD_MESSAGE, GET_ALL_MESSAGES, DELETE_MESSAGE } from '../type';

const inital = {
  addMessage: [],
  getMessages: [],
  deleteMessage: [],
};

const messReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        addMessage: action.payload,
      };
    case GET_ALL_MESSAGES:
      return {
        ...state,
        getMessages: action.payload,
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        deleteMessage: action.payload,
      };

    default:
      return state;
  }
};
export default messReducer;
