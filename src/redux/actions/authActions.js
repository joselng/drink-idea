import { toast } from 'react-toastify';

import { ActionTypes } from '../constants/actionTypes';

import { backendApi } from '../../services/api';

export const SignInStart = (email, password) => ({
  type: ActionTypes.SIGN_IN_START,
  payload: { email, password },
});

export const SignInSuccess = (token, user) => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: { token, user },
});

export const signInFail = () => ({
  type: ActionTypes.SIGN_IN_FAIL,
});

export function signIn(email, password) {
  return async function (dispatch) {
    dispatch(SignInStart());

    return backendApi
      .post('/sessions', {
        email, password,
      })
      .then((response) => {
        const { user, token } = response.data;

        dispatch(SignInSuccess(user, token));

        toast.success(`Bem vindo(a) ${user.name}`);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        dispatch(signInFail(error));
      });
  };
}
