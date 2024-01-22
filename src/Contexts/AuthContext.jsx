// AuthContext.js
import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
	isAuthenticated: false,
};

// Actions
const actionTypes = {
	LOGIN: "LOGIN",
	CHECK_TOKEN: "CHECK_TOKEN",
	LOGOUT: "LOGOUT",
};

// Reducer function
const authReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				...state,
				isAuthenticated: true,
			};
		case actionTypes.LOGOUT:
			localStorage.clear();
			return {
				...state,
				isAuthenticated: false,
			};
		case actionTypes.CHECK_TOKEN:
			// Check if token exists in localStorage and update isAuthenticated
			const isAuthenticated = !!localStorage.getItem("token");
			return {
				...state,
				isAuthenticated,
			};
		default:
			return state;
	}
};

// Context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = () => dispatch({ type: actionTypes.LOGIN });
	const logout = () => dispatch({ type: actionTypes.LOGOUT });
	const tokenCheck = () => dispatch({ type: actionTypes.CHECK_TOKEN });

	return (
		<AuthContext.Provider value={{ state, login, logout, tokenCheck }}>
			{children}
		</AuthContext.Provider>
	);
};

// Custom hook to use the AuthContext
const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export { AuthProvider, useAuth };
