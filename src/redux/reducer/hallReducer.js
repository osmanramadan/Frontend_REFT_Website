import { reservHallByHour, reservHallByInterval } from '../actions/hallAction';
import {
  ADD_HALL,
  GET_ALL_HALLS,
  SEARCH_HALLS,
  GET_ADMIN_HALLS,
  CHANGE_HALL_STATUS,
  GET_USER_HALLS,
  RESERV_HALL_BY_INTERVAL,
  RESERV_HALL_BY_HOUR 

} from '../type';

const inital = {
  addHall: [],
  getHalls: [],
  getAdminHalls: [],
  getUserHalls: [],
  searchHalls: [],
  reservHallByHour:[],
  reservHallByInterval:[],
  hallStatus: [],
};

const hallReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_HALL:
      return {
        ...state,
        addHall: action.payload,
      };
    case GET_ALL_HALLS:
      return {
        ...state,
        getHalls: action.payload,
      };
    case GET_ADMIN_HALLS:
      return {
        ...state,
        getAdminHalls: action.payload,
      };

    case GET_USER_HALLS:
      return {
        ...state,
        getUserHalls: action.payload,
      };

    case SEARCH_HALLS:
      return {
        ...state,
        searchHalls: action.payload,
      };
    case CHANGE_HALL_STATUS:
      return {
        ...state,
        hallStatus: action.payload,
      };
    case RESERV_HALL_BY_HOUR:
        return {
          ...state,
        reservHallByHour: action.payload,
        };
    case RESERV_HALL_BY_INTERVAL:
      return {
        ...state,
        reservHallByInterval: action.payload,
      };

    default:
      return state;
  }
};
export default hallReducer;
