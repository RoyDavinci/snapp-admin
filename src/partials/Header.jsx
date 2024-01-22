import React, { useState } from "react";
import { BsBell, BsFillCalendarWeekFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import DatePicker from "react-flatpickr";

function Header({ page }) {
	const [searchModalOpen, setSearchModalOpen] = useState(false);
	const date = new Date();
	const exactMonth = date.getMonth() + 1;

	return (
		<header className='sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30'>
			<div className='header-outer'>
				<div className='admin-info flex justify-end items-center gap-x-10 bg-[#EDEDED] py-3 px-7'>
					<BsBell size={20} className='text-black' />
					<div className='admin flex gap-x-5 items-center'>
						<FaUser
							size={25}
							className='text-black border-[#ADAFB3] h-10 w-10 border rounded-full'
						/>
						<div className='admin-name-title text-[#8F8F8F]'>
							<h4 className='text-sm font-normal'>Admin Ghost-Guest </h4>
							<p className='text-xs text-right'>Administrator 1 </p>
						</div>
					</div>
				</div>

				<div className='name-date flex justify-between items-center py-3 px-7'>
					<h4 className='text-sm font-medium'>{page}</h4>
					<div className='date-outer flex items-center border-[#E5E8EC] border rounded-sm overflow-hidden'>
						<BsFillCalendarWeekFill
							size={30}
							className='text-[#ADAFB3] bg-[#F2F4F6] p-2 h-full w-10'
						/>
						<DatePicker
							className='!border-none !outline-none !accent-[#8f8f8f21]'
							placeholder={
								date.getDate() + "-" + exactMonth + "-" + date.getFullYear()
							}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
