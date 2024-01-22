import React, {
	createContext,
	useEffect,
	useLayoutEffect,
	useReducer,
	useState,
} from "react";
import { GetAllUsers } from "../api/users";
import { USERS_INITIAL_STATE, UsersReducer } from "../reducers/usersReducer";
import { ACTION_TYPES } from "../reducers/actionTypes";

export const UsersDataContext = createContext(null);

const UsersContext = ({ children }) => {
	// const [usersData, setUsersData] = useState(null);
	// const [usersCount, setUsersCount] = useState({});
	// const [usersLocation, setUsersLocation] = useState([]);

	const [state, dispatch] = useReducer(UsersReducer, USERS_INITIAL_STATE);

	return (
		<UsersDataContext.Provider value={{ state, dispatch }}>
			{children}
		</UsersDataContext.Provider>
	);
};

export default UsersContext;
