import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import UsersContext, { UsersDataContext } from "../../Contexts/UsersContext";
// import Avatar from "@mui/material/Avatar";
import { GetAllUsers } from "../../api/users";
import { ACTION_TYPES } from "../../reducers/actionTypes";
import { ApiDataContext } from "../../Contexts/DataContext";
import { GetAllReports } from "../../api/reports";
import moment from "moment";

export const ReportData = () => {
	const { reports } = useContext(ApiDataContext);
	const allReports = reports.reports;

	const { state } = useContext(UsersDataContext);
	const users = state.users;

	console.log("All Reports: ", allReports);
	console.log("All users: ", users);

	const columns = [
		{
			field: "assets",
			headerName: "Media",
			width: 70,
			height: 70,
			renderCell: (params) => {
				return (
					<>
						<img
							src={params.value[0]}
							alt='image'
							style={{
								width: 50,
								height: 50,
								padding: 10,
								borderRadius: "50%",
							}}
						/>
					</>
				);
			},
		},
		{
			field: "reportedOn",
			headerName: "Date Reported",
			width: 140,
			renderCell: (params) => {
				const dateObj = params.row?.reportedOn;
				const newDate = moment(dateObj).format("lll");
				return <>{newDate}</>;
			},
		},
		{
			field: "location",
			headerName: "Address",
			width: 200,
			renderCell: (params) => params.value?.address,
		},
		//   {
		//     field: 'area',
		//     headerName: 'Location',
		//     width: 150,
		//     renderCell: (params) => params.row.location.area
		//   },
		{
			field: "category",
			headerName: "Category",
			// type: 'number',
			width: 100,
			// editable: true,
		},

		{
			field: "subCategory",
			headerName: "Severity",
			sortable: false,
			width: 90,
		},
		{
			field: "description",
			headerName: "Description",
			// description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 200,
		},
		{
			field: "reported-by",
			headerName: "Reported By",
			sortable: false,
			width: 160,
			valueGetter: (params) => {
				const rUser = users.filter((user) => user._id === params.row?.userID);
				//   console.log("Reported By: ", rUser)
				return `${rUser[0]?.firstName} ${rUser[0]?.lastName}`;
			},
		},
		{
			field: "likes",
			headerName: "Likes",
			sortable: false,
			width: 80,
			renderCell: (params) => params.row.likes.length,
		},
	];

	return (
		<div className='users-info-outer pb-14'>
			<Box sx={{ height: 400, width: "100%" }}>
				<h2 style={{ margin: 10 }}>Latest Reports</h2>
				<DataGrid
					rows={allReports}
					columns={columns}
					getRowId={(row) => row._id}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 5,
							},
						},
					}}
					pageSizeOptions={[5, 10, 20, 50, 100]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
			</Box>
		</div>
	);
};

export default ReportData;
