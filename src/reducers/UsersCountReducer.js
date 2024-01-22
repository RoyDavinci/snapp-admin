import { ACTION_TYPES } from "./actionTypes";

export const COUNT_INITIAL_STATE = {
    loading: false,
    usersCount: null,
    error: false,
  };
  

export const UsersCountReducer = (state, action) => {
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
          usersCount: action.payload,
        };
      case ACTION_TYPES.FETCH_ERROR:
        return {
          error: true,
          loading: false,
          usersCount: null,
    
        };
      default:
        return state;
    }
  };