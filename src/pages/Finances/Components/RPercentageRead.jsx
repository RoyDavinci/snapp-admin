import React from 'react'

const RPercentageRead = () => {
    const readings = [
        {
            BonusRate: 'Text',
            BounceRate: 'Text',
            Text:'Text',
        }
    ]

  return (
    <div className='percent-outer px-10'>
        <div className='percent-inner flex gap-x-10 justify-between items-start'>
            <div>
                <h3 className=' rev-percent-head bg-[#51D32354] '>
                    Gross Percentage Reading
                </h3>
                <div className=' justify-center flex items-center w-5/6 mx-auto'>
                    {readings.map((data,index)=>(
                        <div key={index} className='space-y-2 text-lg font-light text-[#333333] w-full'>
                            <h3 className='rev-percent-dt'><span>Bonus Rate</span>  <span>%</span> <span>{data.BonusRate}</span></h3>
                            <h3 className='rev-percent-dt'><span> Bounce Rate</span>  <span>%</span> <span>{data.BounceRate}</span></h3>
                            <h3 className='rev-percent-dt'><span> Text</span>  <span>%</span> <span>{data.Text}</span></h3>
                        </div>
                    ))}
                </div>
                
            </div>
            <div>
                <h3 className=' rev-percent-head bg-[#FF7B0052]'>Net Percentage Reading</h3>
                <div className=' justify-center flex items-center w-5/6 mx-auto'>
                    {readings.map((data,index)=>(
                        <div key={index} className='space-y-2 text-lg font-light text-[#333333] w-full'>
                            <h3 className='rev-percent-dt'><span>Bonus Rate</span>  <span>%</span> <span>{data.BonusRate}</span></h3>
                            <h3 className='rev-percent-dt'><span> Bounce Rate</span>  <span>%</span> <span>{data.BounceRate}</span></h3>
                            <h3 className='rev-percent-dt'><span> Text</span>  <span>%</span> <span>{data.Text}</span></h3>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className=' rev-percent-head bg-[#E22A2657]'>Total Percentage Reading</h3>
                <div className=' justify-center flex items-center w-5/6 mx-auto'>
                    {readings.map((data,index)=>(
                        <div key={index} className='space-y-2 text-lg font-light text-[#333333] w-full'>
                            <h3 className='rev-percent-dt'><span>Bonus Rate</span>  <span>%</span> <span>{data.BonusRate}</span></h3>
                            <h3 className='rev-percent-dt'><span> Bounce Rate</span>  <span>%</span> <span>{data.BounceRate}</span></h3>
                            <h3 className='rev-percent-dt'><span> Text</span>  <span>%</span> <span>{data.Text}</span></h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RPercentageRead