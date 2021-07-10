import { ActionTypes } from '../constants/actionTypes';

export const userSignUp = (name, email, password, birthday) => ({
  type: ActionTypes.USER_SIGN_UP,
  payload: {
    name, email, password, birthday,
  },
});

export const userSignFail = () => ({
  type: ActionTypes.USER_SIGN_UP_FAIL,
});
