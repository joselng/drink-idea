import { combineReducers } from 'redux';
import { cocktailReducer } from './cocktailReducer';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { favoriteReducer } from './favoriteReducer';

const reducers = combineReducers({
  cocktails: cocktailReducer,
  auth: authReducer,
  user: userReducer,
  favorites: favoriteReducer,
});
export default reducers;
