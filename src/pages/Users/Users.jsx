import React, { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import UsersInfo from "../../partials/UserDB/UsersInfo";
import UserPerformance from "./Components/UserPerformance";
import UserReadings from "./Components/UserReadings";
import UsersData from "../../partials/UserDB/UsersData";

const Users = () => {
	return (
		<div className='flex h-screen overflow-hidden'>
			<Sidebar />

			<div className='relative flex flex-col flex-1 pt-8 overflow-y-auto overflow-x-hidden bg-[#FCFCFC]'>
				{/* <Header page={"Users"}/>
                <div className="w-full space-y-10">    
                    <UserPerformance/>
                    <UserReadings/>
                    <UsersInfo Info={'Logged Users'}/>
                </div> */}

				<UsersData />
			</div>
		</div>
	);
};

export default Users;
