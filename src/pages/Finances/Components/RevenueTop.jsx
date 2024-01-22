import React from 'react'
import {BsDot} from 'react-icons/bs'
import { data } from 'autoprefixer';
import DashboardCard06 from '../../../partials/dashboard/DashboardCard06';


const RevenueTop = () => {
    const Rtype = [{
        type:'Gross Revenue',
        color:['#3BB873', '#E4E8EF'],
        repValues: [200, 360],
        label:'Gross Revenue'
    },
    {
        type:'Net Revenue',
        color:['#FF7B0052', '#E4E8EF'],
        repValues: [260, 360],
        label:'Net Revenue'
       
    },
    {
        type:'Total Revenue',
        color:['#E22A2657'],
        repValues: [360 ],
        label:'Total Revenue'
    },
    ];



  return (
    <div className='flex justify-between items-center px-14 pt-5'>
        {
            Rtype.map((type, index)=>(
                <div key={index}>
                    <h3 className='font-medium text-lg text-[#2A2A2A]'>{type.type}</h3>

                    <div className='flex justify-evenly items-center'>
                        <DashboardCard06
                            color={type.color} 
                            repValues={type.repValues} 
                            height={200}
                            label={type.label}
                        />

                        <ul>
                            <li className='flex justify-between items-center w-full'>
                                <BsDot size={40} color={'#51D32'}/>
                                <span className='text-[#808191]'>20%</span>
                            </li>

                            <li className='flex justify-between items-center w-full'>
                                <BsDot size={40} color={'#FF7B00'}/>
                                <span className='text-[#808191]'>15%</span>
                            </li>

                            <li className='flex justify-between items-center w-full'>
                                <BsDot size={40} color={'#E22A26'}/>
                                <span className='text-[#808191]'>5%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default RevenueTop