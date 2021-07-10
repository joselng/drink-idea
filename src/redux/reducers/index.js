import { combineReducers } from 'redux';
import { cocktailReducer } from './cocktailReducer';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
  cocktails: cocktailReducer,
  auth: authReducer,
  user: userReducer,
});
export default reducers;
