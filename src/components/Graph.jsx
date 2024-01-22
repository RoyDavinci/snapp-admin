import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export const Graph = ({ users }) => {
	const [graphDetails, setGraphDetails] = useState({
		itemWithout: 0,
		android: 0,
		iOS: 0,
	});
	const getDetails = () => {
		console.log(users);
		const itemsWithoutDeviceOs = users.filter(
			(item) => !item.deviceName
		).length;

		// Count of items with 'android' in the deviceName property
		const androidCount = users.filter(
			(item) => item.deviceName && item.deviceName.toLowerCase() === "android"
		).length;

		// Count of items with 'ios' in the deviceName property
		const iosCount = users.filter(
			(item) => item.deviceName && item.deviceName.toLowerCase() === "ios"
		).length;
		setGraphDetails({
			iOS: iosCount,
			android: androidCount,
			itemWithout: itemsWithoutDeviceOs,
		});
	};

	console.log(graphDetails);
	const labels = ["ios", "unknown", "android"];

	const data = {
		labels,
		datasets: [
			{
				label: "User Device Detsils",
				data: [
					graphDetails.iOS,
					graphDetails.itemWithout,
					graphDetails.android,
				],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	useEffect(() => {
		getDetails();
	}, [users]);

	return (
		<div className='text-center'>
			<h4>User By Device</h4>
			<Doughnut
				data={data}
				// width={"40%"}
				// height={"40%"}
				// options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};
