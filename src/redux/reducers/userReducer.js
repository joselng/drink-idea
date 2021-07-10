import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_REGISTER_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.USER_REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        profile: payload,
      };
    }
    case ActionTypes.USER_REGISTER_FAIL: {
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
