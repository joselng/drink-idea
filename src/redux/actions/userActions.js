import { toast } from 'react-toastify';

import { ActionTypes } from '../constants/actionTypes';

import { backendApi } from '../../services/api';

export const userRegisterStart = (name, email, password) => ({
  type: ActionTypes.USER_REGISTER_START,
  payload: {
    name, email, password,
  },
});

export const userRegisterSuccess = (user) => ({
  type: ActionTypes.USER_REGISTER_SUCCESS,
  payload: user,
});

export const userRegisterFail = () => ({
  type: ActionTypes.USER_REGISTER_FAIL,
});

export function userRegister(name, email, password) {
  return async function (dispatch) {
    dispatch(userRegisterStart());

    return backendApi
      .post('/users', {
        name, email, password,
      })
      .then((response) => {
        const user = response.data;

        dispatch(userRegisterSuccess(user));
        toast.success('Conta criada com sucesso!');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        dispatch(userRegisterFail(error));
      });
  };
}
