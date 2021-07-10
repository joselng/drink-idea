import { ActionTypes } from '../constants/actionTypes';

export const signInRequest = (email, password) => ({
  type: ActionTypes.SIGN_IN_REQUEST,
  payload: { email, password },
});

export const signInSuccess = (token, user) => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: { token, user },
});

export const signFail = () => ({
  type: ActionTypes.SIGN_IN_FAIL,
});

export const signOut = () => ({
  type: ActionTypes.SIGN_OUT,
});
