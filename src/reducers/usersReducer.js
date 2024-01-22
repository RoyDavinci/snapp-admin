import { ACTION_TYPES } from "./actionTypes";

export const USERS_INITIAL_STATE = {
    loading: false,
    users: [],
    error: false,
  };
  

export const UsersReducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPES.FETCH_LOADING:
        return {
            ...state,
          loading: true,
          
        };
      case ACTION_TYPES.FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
        };
      case ACTION_TYPES.FETCH_ERROR:
        return {
          error: true,
          loading: false,
          users: [],
        };
      default:
        return state;
    }
  };