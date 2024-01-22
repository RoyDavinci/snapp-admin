import React, {
	createContext,
	useEffect,
	useLayoutEffect,
	useReducer,
	useState,
} from "react";
import {
	GetAllReports,
	GetReportCountByCat,
	GetStatusCount,
} from "../api/reports";
import {
	REPORT_INITIAL_STATE,
	reportsReducer,
} from "../reducers/reportsReducer";
import { ACTION_TYPES } from "../reducers/actionTypes";

export const ApiDataContext = createContext(null);

const DataContext = ({ children }) => {
	const [count, setCount] = useState([]);
	const [catCount, setCatCount] = useState([]);
	const [reports, dispatch] = useReducer(reportsReducer, REPORT_INITIAL_STATE);

	const getAllReports = async () => {
		dispatch({ type: ACTION_TYPES.FETCH_LOADING });

		try {
			const response = await GetAllReports();
			const reports = await response.data.reports;
			console.log("Reports: ", reports);
			dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: reports });
		} catch (error) {
			dispatch({ type: ACTION_TYPES.FETCH_ERROR });
			console.log("Fetch error: ", error);
		}
	};

	useEffect(() => {
		getAllReports();
	}, []);

	useEffect(() => {
		// const Timer = setTimeout(() => {
			GetStatusCount()
				.then((response) => response.data.data)
				.then((data) => setCount(data))
				.catch((err) => console.log(err));
		// 	return () => clearTimeout(Timer);
		// }, 500);
	}, []);

	useEffect(() => {
		// const Timer = setTimeout(() => {
			GetReportCountByCat()
				.then((response) => response.data.data)
				.then((data) => setCatCount(data))
				.catch((err) => console.log(err));
		// 	return () => clearTimeout(Timer);
		// }, 500);
	}, []);

	return (
		<ApiDataContext.Provider value={{ count, reports, catCount }}>
			{children}
		</ApiDataContext.Provider>
	);
};

export default DataContext;
