import React, { useContext } from "react";
import { BsThreeDotsVertical, BsDot } from "react-icons/bs";
import { ApiDataContext } from "../../Contexts/DataContext";
import PieChart from "../../charts/PieChart";

const ReportCharts = () => {
	const { catCount } = useContext(ApiDataContext);
	const {
		crashCount,
		hazardCount,
		kidnappingCount,
		floodCount,
		riotCount,
		fireCount,
		closedRoadCrash,
		lawEnforcementCount,
		trafficCount,
		protestCount,
		robberyCount,
	} = catCount;

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

	const categoryCount = {
		labels: [
			"crash",
			"hazard",
			"kidnapping",
			"flood",
			"riot",
			"fire",
			"closedRoadCrash",
			"lawEnforcement",
			"traffic",
			"protest",
			"robbery",
		],
		datasets: [
			{
				label: "Report Count By Category",
				data: [
					crashCount,
					hazardCount,
					kidnappingCount,
					floodCount,
					riotCount,
					fireCount,
					closedRoadCrash,
					lawEnforcementCount,
					trafficCount,
					protestCount,
					robberyCount,
				],
				backgroundColor: Object.values(PIE_COLORS),
			},
		],
	};

	return (
		<div className='user-reading-outer px-7 pb-10'>
			<div className='ur-inner flex gap-x-10 justify-between items-center'>
				<div className='ur-inner-left w-6/6'>
					<div className='ur-top flex w-full justify-between items-center mb-3'>
						<h3 className='text-lg text-black font-semibold'>
							Reports By Category
						</h3>
						<BsThreeDotsVertical />
					</div>

					<div className='ur-bottm flex gap-x-10 justify-between'>
						<ul className=' text-md font-medium w-[40%]  space-y-2'>
							<li className='flex justify-between items-center w-full'>
								<h3 className='text-[#11142D] flex items-center'>
									<BsDot size={35} color={"#4879F5"} />
									Crashs
								</h3>
								<span className='text-[#808191]'>{crashCount}</span>
							</li>
							<li className='flex justify-between items-center w-full'>
								<h3 className='text-[#11142D] flex items-center'>
									<BsDot size={35} color={"#44D2F"} />
									Hazards
								</h3>
								<span className='text-[#808191]'>{hazardCount}</span>
							</li>
							<li className='flex justify-between items-center w-full'>
								<h3 className='text-[#11142D] flex items-center'>
									<BsDot size={35} color={"#20C745"} />
									Traffic
								</h3>
								<span className='text-[#808191]'>{trafficCount}</span>
							</li>
							<li className='flex justify-between items-center w-full'>
								<h3 className='text-[#11142D] flex items-center'>
									<BsDot size={35} color={"#F4A74B"} />
									Fire Outbreaks
								</h3>
								<span className='text-[#808191]'>{fireCount}</span>
							</li>
							<li className='flex justify-between items-center w-full'>
								<h3 className='text-[#11142D] flex items-center'>
									<BsDot size={35} color={"#482cae"} />
									Riots
								</h3>
								<span className='text-[#808191]'>{riotCount}</span>
							</li>
							<li className='flex justify-between items-center w-full'>
								<h3 className='text-[#11142D] flex items-center'>
									<BsDot size={35} color={"#F45252"} />
									Floods
								</h3>
								<span className='text-[#808191]'>{floodCount}</span>
							</li>
							<li className='flex justify-between items-center w-full'>
								<h3 className='text-[#11142D] flex items-center'>
									<BsDot size={35} color={"#012b12"} />
									Law Enforcement
								</h3>
								<span className='text-[#808191]'>{lawEnforcementCount}</span>
							</li>
							<li className='flex justify-between items-center w-full'>
								<h3 className='text-[#11142D] flex items-center'>
									<BsDot size={35} color={"#3d0505"} />
									Closed Roads
								</h3>
								<span className='text-[#808191]'>{closedRoadCrash}</span>
							</li>
						</ul>

						<div className='ur-bttm-graph w-[100%] pr-7'>
							{/* <PieChart data={categoryCount} /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReportCharts;
