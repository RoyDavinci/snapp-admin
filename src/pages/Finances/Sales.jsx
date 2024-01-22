import React from 'react'
import DashboardCard02 from '../../partials/dashboard/DashboardCard02'
import DashboardCard04 from '../../partials/dashboard/DashboardCard04'
import DashboardCard06 from '../../partials/dashboard/DashboardCard06'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
import SalesHeader from './Components/SalesHeader'

const Sales = () => {
    const datasets= [
        {
          label: 'Direct',
          data: [
            800, 1600, 900, 1300, 1950, 1700,
          ],
          backgroundColor:'#51D323',
          barPercentage: 0.66,
          categoryPercentage: 0.66,
        },
        {
          label: 'Indirect',
          data: [
            4900, 2600, 5350, 4800, 5200, 4800,
          ],
          backgroundColor: '#FF7B00',
          barPercentage: 0.66,
          categoryPercentage: 0.66,
        },
      ]

      const details= [
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
    <div>
        <div className="flex h-screen overflow-hidden">
            <Sidebar  />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFCFC]">
                <Header page={"Finances/Sales"}/>
                <div className="w-full space-y-24 py-7 px-4">

                    <div className="sales-top flex gap-x-12 text-black">
                        <div className='w-3/6'>
                            <SalesHeader GraphType={"Bar Chart"}/>
                            <h4 className=' text-2xl font-semibold my-10'>Sales Report</h4>
                            <DashboardCard04 datasets={datasets}/>
                            <div className='border-y border-[#8D8D8D] py-1 mt-5 '>
                                <h6 className='text-right text-[#696969] font-normal text-xs pr-2'>View Detailed List</h6>
                            </div>
                        </div>

                        <div className='w-3/6'>
                            <SalesHeader GraphType={"Line Chart"}/>
                            <h4 className=' text-2xl font-semibold mt-10 mb-2'>Details</h4>
                            <p className=' text-sm font-normal text-[#222222]'>The total number of sessions within the date range. 
                                It is the period time a user is actively engaged with your website, page or app, etc
                            </p>
                            <DashboardCard02/>
                            <div className='border-y border-[#8D8D8D] py-1 mt-5 '>
                                <h6 className='text-right text-[#696969] font-normal text-xs pr-2'>View Detailed List</h6>
                            </div>
                        </div>
                    </div>


                    <div className="sales-top flex gap-x-12 text-black">
                        <div className='w-3/6 space-y-10'>
                            <SalesHeader GraphType={"Pie Chart"}/>
                            <DashboardCard06 
                                color={['#3BB873','#FF7B00','#E22A26', '#6C5DD3']} 
                                repValues={[180,60,60,50]} 
                                height={248}
                                label={''}/>
                            <div className='border-y border-[#8D8D8D] py-1 mt-5 '>
                                <h6 className='text-right text-[#696969] font-normal text-xs pr-2'>View Detailed List</h6>
                            </div>
                        </div>

                        <div className='w-3/6 space-y-10'>
                            <SalesHeader GraphType={"Bar Chart"}/>
                            <DashboardCard04 datasets={details}/>
                            <div className='border-y border-[#8D8D8D] py-1 mt-5 '>
                                <h6 className='text-right text-[#696969] font-normal text-xs pr-2'>View Detailed List</h6>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Sales