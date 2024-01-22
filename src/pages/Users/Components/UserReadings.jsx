import React from 'react'
import {BsThreeDotsVertical, BsDot,BsArrowLeftRight, BsPiggyBank} from 'react-icons/bs'
import {AiOutlineArrowDown,AiOutlineLike} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import Graph2 from '../Images/user-readings.svg'





const UserReadings = () => {

    const userAna = [
        {
            title: "Conversation rate",
            mainIcon:<BsArrowLeftRight size={23} color={'#5465FF'}/>,
            percentage:'23%',
            value:'3.72'
        },
        {
            title: "Liked comments",
            mainIcon:<AiOutlineLike size={23} color={'#5465FF'}/>,
            percentage:'5%',
            value:'5.67'
        },
        {
            title: "Added comments",
            mainIcon:<FaRegComment size={23} color={'#5465FF'}/>,
            percentage:'5%',
            value:'12.92'
        },
        {
            title: "Coin sales",
            mainIcon:<BsPiggyBank size={23} color={'#5465FF'}/>,
            percentage:'15%',
            value:'12.92'
        },
    ]


  return (
    <div className='user-reading-outer px-7 pb-10'>
        <div className="ur-inner flex gap-x-10 justify-between items-center">
            
            <div className="ur-inner-left w-3/6">
                <div className="ur-top flex w-full justify-between items-center mb-3">
                    <h3 className='text-lg text-black font-semibold'>User Readings</h3>
                    <BsThreeDotsVertical/>
                </div>

                <div className='ur-bottm flex gap-x-10 justify-between'>
                    <ul className=" text-md font-medium w-[40%]  space-y-2">
                        <li className='flex justify-between items-center w-full'>
                            <h3 className='text-[#11142D] flex items-center'><BsDot size={35} color={'#4879F5'}/>Google</h3>
                            <span className='text-[#808191]'>20%</span>
                        </li>
                        <li className='flex justify-between items-center w-full'>
                            <h3 className='text-[#11142D] flex items-center'><BsDot size={35} color={'#44D2F'}/>Facebook</h3>
                            <span className='text-[#808191]'>40%</span>
                        </li>
                        <li className='flex justify-between items-center w-full'>
                            <h3 className='text-[#11142D] flex items-center'><BsDot size={35} color={'#20C745'}/>Website</h3>
                            <span className='text-[#808191]'>15%</span>
                        </li>
                        <li className='flex justify-between items-center w-full'>
                            <h3 className='text-[#11142D] flex items-center'><BsDot size={35} color={'#F4A74B'}/>Digital Ads</h3>
                            <span className='text-[#808191]'>25%</span>
                        </li>
                        <li className='flex justify-between items-center w-full'>
                            <h3 className='text-[#11142D] flex items-center'><BsDot size={35} color={'#F45252'}/>Other</h3>
                            <span className='text-[#808191]'>10%</span>
                        </li>
                    </ul>
                    

                    <div className='ur-bttm-graph w-[40%] pr-7'>
                        <img src={Graph2} className='w-full' alt='users-graph'/>
                    </div>

                </div>
            </div>
            

            <div className="ur-inner-right w-3/6 flex flex-wrap gap-5">
                {
                    userAna.map((usersAnalytics, index)=>(
                        <div className="ura flex justify-between p-4 py-3 items-center w-[45%] border border-[#d7dadd] rounded-md" key={index}>
                            <div className="ura-inner space-y-2 w-fit">
                                <h5 className='text-base font-normal text-[#999999]'>{usersAnalytics.title}</h5>

                                <div className="values flex justify-between gap-x-3 items-end">
                                    <h3 className='text-[#333840] font-bold text-2xl'>{usersAnalytics.value}</h3>
                                    <AiOutlineArrowDown color={index%2==0? '#F13B1F':'#08AA58'} className={`${index%2!==0?'rotate-180 place-self-start':'place-self-end'} `}/>
                                    <h6 className=' text-sm text-[#BFC6D0] font-medium pb-2'>{usersAnalytics.percentage}</h6>
                                </div>
                            </div>


                            {usersAnalytics.mainIcon}
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default UserReadings