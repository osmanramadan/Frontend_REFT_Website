import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import hallReducer from './hallReducer';

export const combineReducer = combineReducers({
  authReducer: authReducer,
  commentReducer: commentReducer,
  hallReducer: hallReducer,
});
