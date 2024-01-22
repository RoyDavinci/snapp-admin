import React, { useEffect } from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04({datasets}) {


  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: datasets,
    
  };

  return (
    <div>
      <BarChart data={chartData} width={595} height={248}/>
    </div>
  );
}

export default DashboardCard04;
