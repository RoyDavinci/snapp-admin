import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Pied = ({ item }) => {
	console.log(item, item.datasets[0]);

	const data = {
		labels: item.labals,
		datasets: [
			{
				label: "# of Votes",
				data: item.datasets[0].data,
				backgroundColor: item.datasets[0].backgroundColor,
				borderColor: item.datasets[0].backgroundColor,
				borderWidth: 1,
			},
		],
	};
	return <Pie data={data} />;
};
