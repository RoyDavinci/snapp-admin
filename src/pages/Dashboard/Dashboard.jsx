import React, { useContext } from "react";
import Sidebar from "../../partials/Sidebar";
import { sideBarContext } from "../../Contexts/SideBContext";
import Header from "../../partials/Header";
import UsersCount from "../../partials/UserDB/UsersCounter";
import { ApiDataContext } from "../../Contexts/DataContext";
import DoughnutChart from "../../charts/DoughnutChart";
import { BsThreeDotsVertical } from "react-icons/bs";
import SideBarWidget from "../../components/SidebarWidget";
import ReportData from "./ReportData";

const Dashboard = () => {
	const { sidebarOpen, setSidebarOpen } = useContext(sideBarContext);
	const { count } = useContext(ApiDataContext);
	const { safeCount, panicCount, dangerCount } = count;

	const CHART_COLORS = {
		danger: "rgb(255, 99, 132)",
		panic: "rgb(255, 159, 64)",
		safe: "rgb(10, 178, 44)",
		yellow: "rgb(255, 205, 86)",
		blue: "rgb(54, 162, 235)",
		purple: "rgb(153, 102, 255)",
		grey: "rgb(201, 203, 207)",
	};
	const PIE_COLORS = {
		hazardCount: "rgb(255, 99, 132)",
		crashCount: "rgb(255, 0, 55)",
		kidnappingCount: "rgb(31, 30, 28)",
		floodCount: "rgb(54, 162, 235)",
		riotCount: "rgb(255, 205, 86)",
		fireCount: "rgb(188, 75, 41)",
		closedRoadCrash: "rgb(153, 102, 255)",
		lawEnforcementCount: "rgb(117, 118, 120)",
		trafficCount: "rgb(3, 145, 12)",
		protestCount: "rgb(0, 6, 190)",
		robberyCount: "rgb(144, 2, 82)",
	};
	const data = {
		labels: ["Danger", "Panic", "Safe"],
		datasets: [
			{
				label: "Safety Status",
				data: [dangerCount, panicCount, safeCount],
				backgroundColor: Object.values(CHART_COLORS),
			},
		],
	};

	const listStyle = {
		maxHeight: "300px",
		height: "auto", // Set your desired height
		overflowY: "auto", // Enable vertical overflow with a scrollbar
	};
	return (
		<div className='flex h-screen overflow-hidden justify-between'>
			{/* Sidebar */}

			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			{/* Content area */}
			<div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
				{/*  Site header */}
				<Header
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
					page={"Dashboard"}
				/>
				<main>
					<div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto space-y-10 bg-white'>
						<UsersCount />

						<div className='db-status flex items-start justify-between py-7'>
							<div className='status-bar-info space-y-3 w-[73%] gap-x-7'>
								<div className='status-bar-header flex justify-between items-center'>
									<h3 className='text-lg text-black font-semibold'>
										Status Chart
									</h3>
								</div>

								<div className='bar-chart py-7'>
									<DoughnutChart data={data} />
								</div>
							</div>

							<div className=' px-10 space-y-7 w-[27%]'>
								<div className='signUp-top flex w-full justify-between items-center'>
									<h3 className='text-lg text-black font-semibold'>
										Users in Distress{" "}
									</h3>
									<BsThreeDotsVertical />
								</div>

								<div
									style={listStyle}
									className=' space-y-5  overflow-y-auto no-scrollbar'
								>
									<SideBarWidget />
								</div>
							</div>
						</div>

						<ReportData Info={"Reports"} />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
