import React, {
	createContext,
	useEffect,
	useLayoutEffect,
	useReducer,
	useState,
} from "react";
import { GetAllUsers } from "../api/users";
import {
	COUNT_INITIAL_STATE,
	UsersCountReducer,
} from "../reducers/UsersCountReducer";
import { ACTION_TYPES } from "../reducers/actionTypes";

export const UsersCountContext = createContext(null);

const UsersCounter = ({ children }) => {
	const [state, dispatch] = useReducer(UsersCountReducer, COUNT_INITIAL_STATE);

	return (
		<UsersCountContext.Provider value={{ state, dispatch }}>
			{children}
		</UsersCountContext.Provider>
	);
};

export default UsersCounter;
