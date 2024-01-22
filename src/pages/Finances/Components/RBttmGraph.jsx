import React from 'react'
import { BsDot } from 'react-icons/bs'
import DashboardCard04 from '../../../partials/dashboard/DashboardCard04'


const RBttmGraph = () => {
  const datasets= [
    {
      label: 'Direct',
      data: [
        800, 1600, 900, 1300, 1950, 1700,
      ],
      backgroundColor:'#5465FF',
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    {
      label: 'Indirect',
      data: [
        4900, 2600, 5350, 4800, 5200, 4800,
      ],
      backgroundColor: '#5465FF',
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ]


  return (
    <div className='p-10 mx-10 border border-[#EEF0F2] '>
      <h3 className='text-2xl font-medium text-black text-center pb-10'>Total Revenue Reading</h3>
      <DashboardCard04 datasets={datasets}/>
      <div className='flex items-center justify-center pt-5'>
            <BsDot size={35} className='text-[#5465FF]'/>
            <h5 className='text-sm font-normal text-black'>Sales</h5>
        </div>
    </div>
  )
}

export default RBttmGraph