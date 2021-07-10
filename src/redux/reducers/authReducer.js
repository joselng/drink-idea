import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  token: null,
  signed: false,
  loading: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_REQUEST: {
      return { ...state, loading: true };
    }
    case ActionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state, token: payload.token, signed: true, loading: false,
      };
    }
    case ActionTypes.SIGN_IN_FAILURE: {
      return { ...state, loading: false };
    }
    case ActionTypes.SIGN_OUT: {
      return { ...state, token: null, signed: false };
    }
    default:
      return state;
  }
};
