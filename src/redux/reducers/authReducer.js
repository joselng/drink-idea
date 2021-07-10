import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  token: null,
  signed: false,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        signed: true,
        token: payload,
      };
    }
    case ActionTypes.SIGN_IN_FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
