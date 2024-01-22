import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard/Dashboard";
// import Users from "./pages/Users/Users";
// import Payments from "./pages/Finances/Payments";
// import Revenue from "./pages/Finances/Revenue";
// import Sales from "./pages/Finances/Sales";
// import Reports from "./pages/Reports";
// import SideBContext from "./Contexts/SideBContext";
// import DataContext from "./Contexts/DataContext";
// import UsersContext from "./Contexts/UsersContext";
// import UsersCounter, { UsersCountContext } from "./Contexts/UsersCountContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { Login } from "./components/Login";
import { Auth } from "./components/Auth";
import SideBContext from "./Contexts/SideBContext";
import UsersCounter from "./Contexts/UsersCountContext";
import DataContext from "./Contexts/DataContext";
import UsersContext from "./Contexts/UsersContext";
import { User } from "./components/User";

function App() {
	const location = useLocation();

	useEffect(() => {
		document.querySelector("html").style.scrollBehavior = "auto";
		window.scroll({ top: 0 });
		document.querySelector("html").style.scrollBehavior = "";
	}, [location.pathname]); // triggered on route change

	return (
		<AuthProvider>
			<DataContext>
				<UsersContext>
					<UsersCounter>
						<SideBContext>
							<>
								<Routes>
									<Route path='/login' element={<Login />} />
									<Route element={<Auth />}>
										<Route exact path='/' element={<Dashboard />} />
										<Route path='/users' element={<User />} />
										{/* <Route path='/finance/payment' element={<Payments />} /> */}
										{/* <Route path='/finance/revenue' element={<Revenue />} /> */}
										{/* <Route path='/finance/sales' element={<Sales />} /> */}
										{/* <Route path='/reports' element={<Reports />} /> */}
									</Route>
								</Routes>
							</>
						</SideBContext>
					</UsersCounter>
				</UsersContext>
			</DataContext>
		</AuthProvider>
	);
}

export default App;
