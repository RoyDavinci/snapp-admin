import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import UsersInfo from "../partials/UserDB/UsersInfo";
import ReportData from "./Dashboard/ReportData";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import FadeLoader from "react-spinners/FadeLoader";
import defaultUser from "../images/abstract-user-flat-4.svg";
import ReportCharts from "../partials/reports/ReportCharts";

const override = {
	display: "block",
	margin: "0 auto",
};

const Reports = () => {
	const [reports, setReports] = useState([]);
	const [loading, setLoading] = useState(false);
	const [reportState, setReportState] = useState(false);
	const [singleReportLoading, setSingleReportLoading] = useState(false);
	const [singleReport, setSingleReport] = useState([]);

	const contentTodisplay = (value) => {
		if (value[0]) {
			const data = value[0].split(".");
			if (data[data.length - 1].includes("mp")) {
				return (
					<div>
						<video src={value[0]}></video>
					</div>
				);
			} else if (data.length > 1) {
				return (
					<div>
						<img src={value[0]} alt='' />
					</div>
				);
			}
			return <div></div>;
		}
	};

	const columns = [
		{
			field: "assets",
			headerName: "Media",
			width: 70,
			height: 70,
			renderCell: (params) => {
				const data = params.value[0] ? params?.value[0]?.split(".") : "";
				return (
					<>
						<img
							src={
								data === "" || data[data.length - 1].includes("mp")
									? defaultUser
									: params.value[0]
							}
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
		// {
		// 	field: "reported-by",
		// 	headerName: "Reported By",
		// 	sortable: false,
		// 	width: 160,
		// 	valueGetter: (params) => {
		// 		const rUser = users.filter((user) => user._id === params.row?.userID);
		// 		//   console.log("Reported By: ", rUser)
		// 		return `${rUser[0]?.firstName} ${rUser[0]?.lastName}`;
		// 	},
		// },
		{
			field: "likes",
			headerName: "Likes",
			sortable: false,
			width: 80,
			renderCell: (params) => params.row.likes.length,
		},
	];

	const handleRowClick = async (selected) => {
		// Update the path as needed
		// history.push(`/yourpage/${selectedRow}`);
		console.log(selected.id);
		setReportState(!reportState);
		setSingleReportLoading(true);

		try {
			const { data } = await axios.get(
				`https://us-central1-snapp-api-6df70.cloudfunctions.net/snapp-api/api/report/report/${selected.id}`
			);
			console.log(data);
			setSingleReportLoading(false);
			setSingleReport(data.report);
		} catch (error) {
			console.log(error);
		}
	};

	const getReports = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(
				"https://us-central1-snapp-api-6df70.cloudfunctions.net/snapp-api/api/report/all-reports"
			);
			console.log(data);
			setLoading(false);
			setReports(
				data.reports.sort((a, b) => {
					const dateA = new Date(a.createdAt);
					const dateB = new Date(b.createdAt);
					return dateB - dateA;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getReports();
	}, []);

	return (
		<div className='flex h-screen overflow-hidden'>
			<Sidebar />

			<div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFCFC]'>
				<Header page={"Reports"} />
				{loading ? (
					<div className='flex justify-center items-center flex-col h-screen'>
						<FadeLoader
							loading={loading}
							cssOverride={override}
							size={300}
							aria-label='Loading Spinner'
							data-testid='loader'
						/>
					</div>
				) : (
					<div className='w-full space-y-10 py-10'>
						{/* <ReportData Info={"Reports"} /> */}
						<div className='bar-chart py-7'>
							<ReportCharts />
						</div>
						<Box sx={{ height: 400, width: "100%" }}>
							<h2 style={{ margin: 10 }}>Latest Reports</h2>
							<DataGrid
								rows={reports}
								columns={columns}
								getRowId={(row) => row._id}
								initialState={{
									pagination: {
										paginationModel: {
											pageSize: 10,
										},
									},
								}}
								pageSizeOptions={[10, 20, 50, 100]}
								checkboxSelection
								disableRowSelectionOnClick
								onRowClick={handleRowClick}
							/>
						</Box>
					</div>
				)}
			</div>
			{reportState ? (
				<div className='z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl w-96 h-80 overflow-y-auto no-scrollbar'>
					{singleReportLoading ? (
						<div className='flex justify-center items-center h-full'>
							<FadeLoader
								loading={singleReportLoading}
								cssOverride={override}
								size={500}
								aria-label='Loading Spinner'
								data-testid='loader'
							/>
						</div>
					) : (
						<div className='p-3'>
							<p className='text-center mb-4'>Report Details</p>
							<div className='flex justify-between items-center'>
								<p className='text-[12px]'>Category: {singleReport.category}</p>{" "}
								<p className='text-[12px]'>
									Description: {singleReport.description}
								</p>
							</div>
							<div className='flex justify-between items-center my-2'>
								<p className='text-[12px]'>
									Likes: {singleReport.likes.length}
								</p>{" "}
								<p className='text-[12px]'>
									Dislikes: {singleReport.likes.length}
								</p>
							</div>
							<div>
								{singleReport.subCategory && (
									<p>SubCategory: {singleReport.subCategory}</p>
								)}
								<p>
									Expired:{" "}
									{singleReport.expired ? (
										<span className='font-bold'>Yes</span>
									) : (
										<span className='font-bold'>No</span>
									)}
								</p>
								<p>
									Suspended:{" "}
									{singleReport.relevanceScore && (
										<span className='font-bold'>
											{singleReport.relevanceScore}
										</span>
									)}
								</p>

								<p>
									Location :{" "}
									<span className='font-bold'>
										{singleReport.location.address}
									</span>
								</p>
								<div>
									<p>Report</p>
									<div>{contentTodisplay(singleReport.assets)}</div>
								</div>
							</div>
						</div>
					)}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Reports;
