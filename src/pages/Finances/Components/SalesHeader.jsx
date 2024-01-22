import React from 'react'

const SalesHeader = ({GraphType}) => {
    const date = new Date();
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November","December"];
    const MonthName = Month.filter((e, index)=>{
        if( date.getMonth() === index){
            return e;
        }
    });

  return (
    <div className='space-y-7'>
        <div className='text-black'>
            <h3 className='text-sm font-normal'>Top Items by sales volume</h3>
            <p className=' text-xs font-light'>{` ${MonthName } ${date.getDay()},   ${date.getFullYear()} `}</p>
        </div>
        <div className='flex justify-between items-center text-base font-medium'>
            <h4>{GraphType}</h4>
            <div className='filter-outer px-0 border'>
                <select name="" id="" className='w-full outline-none border-none relative h-full bg-transparent text-base font-normal'>
                    
                    <option value="" disabled selected>Month</option>
                    {
                        Month.map((month, index)=>(
                            <option value={month} key={index} className='text-[#222222]'>{month}</option>
                        ))
                    }
                    
                </select>
            </div>
            
        </div>
    </div>
  )
}

export default SalesHeader