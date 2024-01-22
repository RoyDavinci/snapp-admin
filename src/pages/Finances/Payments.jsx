import React from 'react'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
import UsersInfo from '../../partials/UserDB/UsersInfo'
import PaymentGraph from './Components/PaymentGraph'


const Payments = () => {
  return (
    <div>
        <div className="flex h-screen overflow-hidden">
            <Sidebar  />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFCFC]">
                <Header page={"Finances/Payments"}/>
                <div className="w-full space-y-20">
                    <PaymentGraph/>
                    <UsersInfo Info={'SUBSCRIPTION'}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payments