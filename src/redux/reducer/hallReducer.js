import {
  ADD_HALL,
  GET_ALL_HALLS,
  SEARCH_HALLS,
  GET_ADMIN_HALLS,
  CHANGE_HALL_STATUS,
  GET_USER_HALLS,
  GET_HALLS_CITIES,
  ADD_HALL_RATE,
  ALLOWED_USER_RATE,
} from '../type';

const inital = {
  addHall: [],
  addHallRate: [],
  allowUserRate: [],
  getHalls: [],
  getAdminHalls: [],
  getUserHalls: [],
  searchHalls: [],
  reservHallByHour: [],
  reservHallByInterval: [],
  hallStatus: [],
  getHallsCities: [],
};

const hallReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_HALL:
      return {
        ...state,
        addHall: action.payload,
      };

    case ADD_HALL_RATE:
      return {
        ...state,
        addHallRate: action.payload,
      };

    case ALLOWED_USER_RATE:
      return {
        ...state,
        allowUserRate: action.payload,
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

    case GET_HALLS_CITIES:
      return {
        ...state,
        getHallsCities: action.payload,
      };
    case CHANGE_HALL_STATUS:
      return {
        ...state,
        hallStatus: action.payload,
      };
    // case RESERV_HALL_BY_HOUR:
    //     return {
    //       ...state,
    //     reservHallByHour: action.payload,
    //     };
    // case RESERV_HALL_BY_INTERVAL:
    //   return {
    //     ...state,
    //     reservHallByInterval: action.payload,
    //   };

    default:
      return state;
  }
};
export default hallReducer;
