import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { sideBarContext } from "../Contexts/SideBContext";
import "../css/sidebar.css";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { useAuth } from "../Contexts/AuthContext";

export function Sidebar() {
	const { sidebarOpen, setSidebarOpen } = useContext(sideBarContext);
	const { state, logout } = useAuth();
	console.log(sidebarOpen);

	const location = useLocation();
	const { pathname } = location;

	const trigger = useRef(null);
	const sidebar = useRef(null);

	const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
	const [sidebarExpanded, setSidebarExpanded] = useState(
		storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
	);

	const navigate = useNavigate();

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!sidebar.current || !trigger.current) return;
			if (
				!sidebarOpen ||
				sidebar.current.contains(target) ||
				trigger.current.contains(target)
			)
				return;
			setSidebarOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!sidebarOpen || keyCode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	useEffect(() => {
		localStorage.setItem("sidebar-expanded", sidebarExpanded);
		if (sidebarExpanded) {
			document.querySelector("body").classList.add("sidebar-expanded");
		} else {
			document.querySelector("body").classList.remove("sidebar-expanded");
		}
	}, [sidebarExpanded]);

	useEffect(() => {
		if (state.isAuthenticated) {
			return;
		} else {
			navigate("/login");
		}
	}, [state]);

	return (
		<div>
			{/* Sidebar backdrop (mobile only) */}
			<div
				className={`fixed inset-0 bg-[#e6e6e6] bg-opacity-1 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
					sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				aria-hidden='true'
			></div>

			{/* Sidebar */}
			<div
				id='sidebar'
				ref={sidebar}
				className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar  lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#f1f0f0] transition-all duration-200 ease-in-out ${
					sidebarOpen ? "translate-x-0 w-[220px]" : "-translate-x-64 w-[90px]"
				}`}
			>
				{/* Sidebar header */}
				<div className='flex justify-between mb-10 pr-3 sm:px-2'>
					{/* Close button */}
					<button
						ref={trigger}
						className='lg:hidden text-slate-500 hover:text-slate-400'
						onClick={() => setSidebarOpen(!sidebarOpen)}
						aria-controls='sidebar'
						aria-expanded={sidebarOpen}
					>
						<span className='sr-only'>Close sidebar</span>
					</button>
				</div>

				{/* Links */}
				<div className='space-y-8'>
					{/* Pages group */}
					<div>
						<h3 className='text-xs uppercase text-slate-900 font-semibold pl-3'>
							<span
								className='hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6'
								aria-hidden='true'
							>
								•••
							</span>
						</h3>
						<ul className='mt-3'>
							{/* Dashboard */}
							<SidebarLinkGroup
								activecondition={
									pathname === "/" || pathname.includes("dashboard")
								}
							>
								{(handleClick, open) => {
									return (
										<React.Fragment>
											<div
												className={`px-3 py-4 rounded block truncate transition duration-150 ${
													pathname.includes("/")
														? "hover:bg-white hover:text-black hover:border hover:border-black bg-black text-white "
														: " text-slate-600 bg-[#dbdbdb] hover:text-white hover:bg-black"
												}`}
												onClick={(e) => {
													e.preventDefault();
													sidebarExpanded
														? handleClick()
														: setSidebarExpanded(true);
												}}
											>
												{/*Dashboard*/}
												<NavLink to='/'>
													<div className='flex items-center justify-between'>
														<div className='flex items-center text-white'>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																fill='none'
																viewBox='0 0 24 24'
																strokeWidth={1.5}
																stroke='currentColor'
																className='w-6 h-6 text-white'
															>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
																/>
															</svg>
															<span className='text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-white'>
																Dashboard
															</span>
														</div>
													</div>
												</NavLink>
											</div>
										</React.Fragment>
									);
								}}
							</SidebarLinkGroup>

							{/* Users */}
							<li className='px-3 py-3 text-slate-600 rounded sn-ListItem'>
								<NavLink
									end
									to='/users'
									className={({ isActive }) =>
										"block transition duration-150 truncate " +
										(isActive
											? "text-white bg-black flex rounded "
											: " text-slate-600 rounded flex")
									}
								>
									<svg
										viewBox='0 0 640 512'
										fill='currentColor'
										height='2em'
										width='1.5em'
										className='mr-4 ml-2'
									>
										<path d='M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zm10.7-96c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM128 485.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z' />
									</svg>
									<span className=' font-normal lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pt-1'>
										Users
									</span>
								</NavLink>
							</li>

							{/* Reports */}
							<li className='px-3 py-3 text-slate-600 rounded sn-ListItem'>
								<NavLink
									end
									to='/reports'
									className={({ isActive }) =>
										"block transition duration-150 truncate " +
										(isActive
											? "text-white"
											: "text-slate-600 hover:text-white flex")
									}
								>
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										viewBox='0 0 24 24'
										height='2em'
										width='1.5em'
										className='mr-4 ml-2'
									>
										<path stroke='none' d='M0 0h24v24H0z' />
										<path d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h5.697M18 14v4h4M18 11V7a2 2 0 00-2-2h-2' />
										<path d='M10 3 H12 A2 2 0 0 1 14 5 V5 A2 2 0 0 1 12 7 H10 A2 2 0 0 1 8 5 V5 A2 2 0 0 1 10 3 z' />
										<path d='M22 18 A4 4 0 0 1 18 22 A4 4 0 0 1 14 18 A4 4 0 0 1 22 18 z' />
										<path d='M8 11h4M8 15h3' />
									</svg>
									<span className=' font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pt-1'>
										Reports
									</span>
								</NavLink>
							</li>

							{/* Finance */}
							<SidebarLinkGroup activecondition={pathname.includes("finance")}>
								{(handleClick, open) => {
									return (
										<React.Fragment>
											<div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
												<ul className={`px-5 mt-2  ${!open && "hidden"}`}>
													<li className='mb-1 last:mb-0 sn-SubList'>
														<NavLink
															end
															to='/finance/sales'
															className={({ isActive }) =>
																"block transition duration-150 truncate " +
																(isActive
																	? "text-black bg-white border-black"
																	: "text-slate-500 hover:text-black flex")
															}
														>
															<svg
																viewBox='0 0 24 24'
																fill='currentColor'
																height='1.5em'
																width='1.5em'
																className='ml-2 mr-3'
															>
																<path d='M9 17H7v-7h2v7m4 0h-2V7h2v10m4 0h-2v-4h2v4m2 2H5V5h14v14.1M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' />
															</svg>
															<span className=' font-normal  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 '>
																Sales
															</span>
														</NavLink>
													</li>
													<li className='mb-1 last:mb-0 sn-SubList'>
														<NavLink
															end
															to='/finance/revenue'
															className={({ isActive }) =>
																"block transition duration-150 truncate " +
																(isActive
																	? "text-black bg-white border-black"
																	: "text-slate-500 hover:text-black flex")
															}
														>
															<svg
																fill='none'
																stroke='currentColor'
																strokeLinecap='round'
																strokeLinejoin='round'
																strokeWidth={2}
																viewBox='0 0 24 24'
																height='1.5em'
																width='1.5em'
																className='ml-2 mr-3'
															>
																<path d='M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z' />
															</svg>
															<span className=' font-normal  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
																Revenue
															</span>
														</NavLink>
													</li>
													<li className='mb-1 last:mb-0 sn-SubList'>
														<NavLink
															end
															to='/finance/payment'
															className={({ isActive }) =>
																"block transition duration-150 truncate " +
																(isActive
																	? "text-black bg-white border-black"
																	: "text-slate-500 hover:text-black flex")
															}
														>
															<svg
																viewBox='0 0 640 512'
																fill='currentColor'
																height='1.5em'
																width='1.5em'
																className='ml-2 mr-3'
															>
																<path d='M96 96v224c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64h-64v-64zm64-160c0 35.3-28.7 64-64 64V96h64zm352 160v64h-64c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zm-64 112c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z' />
															</svg>
															<span className='font-normal  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
																Payments
															</span>
														</NavLink>
													</li>
												</ul>
											</div>
										</React.Fragment>
									);
								}}
							</SidebarLinkGroup>

							{/* Analytics */}
							<li className='px-3 py-3 text-slate-600 rounded sn-ListItem'>
								<NavLink
									end
									to='/analytics'
									className={({ isActive }) =>
										"block transition duration-150 truncate " +
										(isActive
											? "text-white bg-black"
											: "text-slate-600 hover:text-white flex")
									}
								>
									<svg
										fill='none'
										viewBox='0 0 24 24'
										width='1.5rem'
										height='2rem'
										className=' ml-2 mr-4 hover:text-white'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M20 19V10.5C20 10.1852 19.8518 9.88885 19.6 9.7L12.6 4.45C12.2444 4.18333 11.7556 4.18333 11.4 4.45L4.4
                           9.7C4.14819 9.88885 4 10.1852 4 10.5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19Z'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
										/>
										<path
											d='M8 13V16M12 10V16M16 15V16'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
										/>
									</svg>
									<span className='font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pt-1'>
										Analytics
									</span>
								</NavLink>
							</li>

							{/* Location */}
							<li className='px-3 py-3 text-slate-600 rounded sn-ListItem'>
								<NavLink
									end
									to='/location'
									className={({ isActive }) =>
										"block transition duration-150 truncate " +
										(isActive
											? "text-white bg-black"
											: "text-slate-600 hover:text-white flex")
									}
								>
									<svg
										width='1.5rem'
										height='2rem'
										className='ml-2 mr-4'
										viewBox='0 0 20 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.9749 19.9498V17.9498C11.6749 17.8498 12.3539 17.6581 13.0119 17.3748C13.6706 17.0915 14.2916 16.7331 14.8749 16.2998L16.3249 17.7498C15.5416 18.3665 14.6999 18.8625 13.7999 19.2378C12.8999 19.6125 11.9582 19.8498 10.9749 19.9498ZM17.7249 16.2998L16.3249 14.8998C16.7582 14.3498 17.1082 13.7455 17.3749 13.0868C17.6416 12.4288 17.8249 11.7331 17.9249 10.9998H19.9749C19.8416 12.0331 19.5876 12.9955 19.2129 13.8868C18.8376 14.7788 18.3416 15.5831 17.7249 16.2998ZM17.9249 8.9998C17.8249 8.2498 17.6416 7.54547 17.3749 6.8868C17.1082 6.2288 16.7582 5.63314 16.3249 5.0998L17.7249 3.6998C18.3582 4.43314 18.8709 5.2498 19.2629 6.1498C19.6542 7.0498 19.8916 7.9998 19.9749 8.9998H17.9249ZM8.9749 19.9498C6.4249 19.6498 4.2959 18.5541 2.5879 16.6628C0.879235 14.7708 0.0249023 12.5498 0.0249023 9.9998C0.0249023 7.41647 0.879235 5.18314 2.5879 3.2998C4.2959 1.41647 6.4249 0.333138 8.9749 0.0498047V2.0498C6.9749 2.33314 5.31657 3.2248 3.9999 4.7248C2.68324 6.2248 2.0249 7.98314 2.0249 9.9998C2.0249 11.9998 2.68324 13.7498 3.9999 15.2498C5.31657 16.7498 6.9749 17.6498 8.9749 17.9498V19.9498ZM14.9249 3.6998C14.3249 3.2498 13.6916 2.88314 13.0249 2.5998C12.3582 2.31647 11.6749 2.13314 10.9749 2.0498V0.0498047C11.9582 0.133138 12.8999 0.362138 13.7999 0.736805C14.6999 1.11214 15.5416 1.61647 16.3249 2.2498L14.9249 3.6998ZM9.9999 14.9998C8.6499 13.8498 7.6459 12.7871 6.9879 11.8118C6.32924 10.8371 5.9999 9.93314 5.9999 9.0998C5.9999 7.8498 6.40424 6.85414 7.2129 6.1128C8.0209 5.3708 8.9499 4.9998 9.9999 4.9998C11.0499 4.9998 11.9792 5.3708 12.7879 6.1128C13.5959 6.85414 13.9999 7.8498 13.9999 9.0998C13.9999 9.93314 13.6706 10.8371 13.0119 11.8118C12.3539 12.7871 11.3499 13.8498 9.9999 14.9998ZM9.9999 9.9998C10.2999 9.9998 10.5542 9.8958 10.7629 9.6878C10.9709 9.47914 11.0749 9.2248 11.0749 8.9248C11.0749 8.64147 10.9709 8.39147 10.7629 8.1748C10.5542 7.95814 10.2999 7.8498 9.9999 7.8498C9.6999 7.8498 9.4459 7.95814 9.2379 8.1748C9.02923 8.39147 8.9249 8.64147 8.9249 8.9248C8.9249 9.2248 9.02923 9.47914 9.2379 9.6878C9.4459 9.8958 9.6999 9.9998 9.9999 9.9998Z'
											fill='currentColor'
										/>
									</svg>

									<span className='font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pt-1'>
										Location
									</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>

				{/* Expand / collapse button */}
				<div className='pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto'>
					<div className='px-3 py-2'>
						<button
							onClick={() => {
								setSidebarExpanded(!sidebarExpanded);
								setSidebarOpen(!sidebarOpen);
							}}
						>
							<span className='sr-only'>Expand / collapse sidebar</span>
							<svg
								className='w-6 h-6 fill-current sidebar-expanded:rotate-180'
								viewBox='0 0 24 24'
							>
								<path
									className='text-slate-400'
									d='M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z'
								/>
								<path className='text-slate-600' d='M3 23H1V1h2z' />
							</svg>
						</button>
					</div>
					<div className='w-1/3'>
						<NavLink>
							<span
								onClick={() => logout()}
								className='text-slate-800 mt-2 text-md'
							>
								Logout
							</span>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
