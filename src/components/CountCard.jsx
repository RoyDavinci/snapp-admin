import React from "react";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";

const CountCard = ({ name, value, color, repValues }) => {
	return (
		<div className='info-box flex justify-between items-center bg-[#f5f5f5] p-4 w-[23%] rounded-md'>
			<div className='info space-y-1'>
				<h5 className='text-sm font-normal text-[#565763]'>{name}</h5>
				<p className='text-2xl font-semibold text-[#11142D]'>{value}</p>
			</div>

			{/* Pie Chart */}
			<div className='info-pie h-full'>
				<DashboardCard06
					color={color}
					repValues={repValues}
					label={name}
					height={70}
				/>
			</div>
		</div>
	);
};

export default CountCard;
