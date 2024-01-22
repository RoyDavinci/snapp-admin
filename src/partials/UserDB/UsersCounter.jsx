import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { GetUsersCount } from "../../api/users";
import { ACTION_TYPES } from "../../reducers/actionTypes";
import { UsersCountContext } from "../../Contexts/UsersCountContext";
import CountCard from "../../components/CountCard";
import { ApiDataContext } from "../../Contexts/DataContext";

const UsersCount = () => {
	const { state, dispatch } = useContext(UsersCountContext);
	const totalUsers = state.usersCount;

	const { count } = useContext(ApiDataContext);
	const { safeCount, panicCount, dangerCount } = count;

	const getUsersCount = async () => {
		dispatch({ type: ACTION_TYPES.FETCH_LOADING });

		try {
			const response = await GetUsersCount();
			const data = await response.data.data;
			dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: ACTION_TYPES.FETCH_ERROR });
			console.log("Fetch error: ", error);
		}
	};

	useEffect(() => {
		getUsersCount();
	}, []);

	return (
		<div className='users-info-outer pb-14'>
			<div className='db-info-top'>
				<div className='flex justify-between  '>
					<CountCard
						name='Total Users'
						color={["#53b7ff"]}
						value={totalUsers}
						repValues={[totalUsers]}
					/>

					<CountCard
						name='Safe'
						color={["#51D323", "#E4E8EF"]}
						value={safeCount}
						repValues={[safeCount, totalUsers]}
					/>

					<CountCard
						name='Panic'
						color={["#FF7B00", "#E4E8EF"]}
						value={panicCount}
						repValues={[panicCount, totalUsers]}
					/>
					<CountCard
						name='Danger'
						color={["#E22A26", "#E4E8EF"]}
						value={dangerCount}
						repValues={[dangerCount, totalUsers]}
					/>
				</div>
			</div>
		</div>
	);
};

export default UsersCount;
