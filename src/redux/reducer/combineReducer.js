import { combineReducers } from 'redux';
import authReducer from './authReducer';
import messReducer from './messReducer';
import hallReducer from './hallReducer';
import bookReducer from './bookReducer';
import checkoutReducer from './checkoutReducer';

export const combineReducer = combineReducers({
  authReducer: authReducer,
  messReducer: messReducer,
  hallReducer: hallReducer,
  checkoutReducer: checkoutReducer,
  bookReducer: bookReducer,
});
