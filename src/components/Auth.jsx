import React, { useEffect } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";

export const Auth = ({ children }) => {
	const { state, tokenCheck } = useAuth();
	// console.log(state);

	// Check token when component mounts
	const navigate = useNavigate();
	// useEffect(() => {
	// 	dispatch({ type: actionTypes.CHECK_TOKEN });
	// }, [dispatch]);
	useEffect(() => {
		tokenCheck();
		console.log(state);

		// Check if authenticated
		if (!state.isAuthenticated) {
			// Redirect to login if not authenticated
			return navigate("/login");
		}
	}, [navigate]);

	return <Outlet />;
};
