import { toast } from 'react-toastify';

import { ActionTypes } from '../constants/actionTypes';

import { backendApi } from '../../services/api';

export const signInStart = (email, password) => ({
  type: ActionTypes.SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (user, token, favorites) => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: { user, token, favorites },
});

export const signInFail = () => ({
  type: ActionTypes.SIGN_IN_FAIL,
});

export function signIn(email, password) {
  return async function (dispatch) {
    dispatch(signInStart());

    return backendApi
      .post('/sessions', {
        email, password,
      })
      .then((response) => {
        const { user, token, favorites } = response.data;

        dispatch(signInSuccess(user, token, favorites));
        backendApi.defaults.headers.Authorization = `Bearer ${token}`;

        toast.success(`Bem vindo(a) ${user.name}`);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        dispatch(signInFail(error));
      });
  };
}
