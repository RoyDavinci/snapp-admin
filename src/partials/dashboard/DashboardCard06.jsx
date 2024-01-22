import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';


function DashboardCard06({color, repValues, label, height}) {

  const chartData = {
    datasets: [
      {
        label: label,
        data: repValues,
        backgroundColor: color,
        borderWidth: 0,
      },
    ],
  };

  return (
    <div >
      <DoughnutChart data={chartData} width={'100%'} height={height} />
    </div>
  );
}

export default DashboardCard06;
