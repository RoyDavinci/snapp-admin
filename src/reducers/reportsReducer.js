import { ACTION_TYPES } from "./actionTypes";

export const REPORT_INITIAL_STATE = {
    loading: false,
    reports: [],
    error: false,
  };
  

export const reportsReducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPES.FETCH_LOADING:
        return {
          loading: true,
          reports: [],
         error: false,
        };
      case ACTION_TYPES.FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          reports: action.payload,
        };
      case ACTION_TYPES.FETCH_ERROR:
        return {
          error: true,
          loading: false,
          reports: [],
        };
      default:
        return state;
    }
  };