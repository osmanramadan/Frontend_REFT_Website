import { combineReducers } from 'redux';
import authReducer from './authReducer';
import messReducer from './messReducer';
import hallReducer from './hallReducer';

export const combineReducer = combineReducers({
  authReducer: authReducer,
  messReducer: messReducer,
  hallReducer: hallReducer,
});
