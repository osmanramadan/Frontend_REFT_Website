import { CREATE_NEW_USER } from '../type';

const inital = {
  createUser: [],
};

const commentReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
      };

    default:
      return state;
  }
};
export default commentReducer;
