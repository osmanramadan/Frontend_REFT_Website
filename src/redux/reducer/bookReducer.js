
import {
    RESERV_HALL_BY_HOUR ,
    RESERV_HALL_BY_INTERVAL_Hours ,
    RESERV_HALL_BY_INTERVAL_Days,
    RESERV_HALL_BY_Days_Hours,
    ADMIN_BOOKING_INFO,
    OWNER_BOOKING_INFO,
    TEACHER_BOOKING_INFO,
  
  } from '../type';
  
  const inital = {

    reservHallByHour:[],
    reservHallByIntervalDays:[],
    reservHallByIntervalHours:[],
    reservHallByIntervalDaysHours:[],
    adminbookinginfo:[],
    teacherbookinginfo:[],
    ownerbookinginfo:[]
  };
  
  const bookReducer = (state = inital, action) => {
    switch (action.type) {

      case RESERV_HALL_BY_HOUR:
          return {
            ...state,
          reservHallByHour: action.payload,
          };
        case RESERV_HALL_BY_INTERVAL_Days:
        return {
          ...state,
          reservHallByIntervalDays: action.payload,
        };
        case RESERV_HALL_BY_INTERVAL_Hours:
            return {
              ...state,
              reservHallByIntervalHours: action.payload,
            };
        case RESERV_HALL_BY_Days_Hours:
                return {
                  ...state,
                  reservHallByIntervalDaysHours: action.payload,
                };
        case ADMIN_BOOKING_INFO:
                  return {
                    ...state,
                    adminbookinginfo:action.payload,
          };
        case TEACHER_BOOKING_INFO:
            return {
              ...state,
              teacherbookinginfo:action.payload,
           };
        case OWNER_BOOKING_INFO:
            return {
             ...state,
             ownerbookinginfo:action.payload,
         };
  
        default:
                return state;
    }
  };
  export default bookReducer;
  