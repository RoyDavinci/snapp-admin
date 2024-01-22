import React from 'react'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
import RBttmGraph from './Components/RBttmGraph'
import RevenueTop from './Components/RevenueTop'
import RPercentageRead from './Components/RPercentageRead'



const Revenue = () => {
  return (
    <div>
        <div className="flex h-screen overflow-hidden">
            <Sidebar  />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFCFC]">
                <Header page={"Finances/Revenue"}/>
                <div className="w-full space-y-14 mb-10">
                    <RevenueTop/>
                    <RPercentageRead/>
                    <RBttmGraph/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Revenue