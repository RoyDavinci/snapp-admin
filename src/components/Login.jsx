import React, { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import axios from "axios";
import { titleCase } from "../utils/capitalise";
import FadeLoader from "react-spinners/FadeLoader";
import { useNavigate } from "react-router-dom";

const override = {
	display: "block",
	margin: "0 auto",
};

export const Login = () => {
	const { login, state } = useAuth();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const { data } = await axios.post(
				"https://us-central1-snapp-api-6df70.cloudfunctions.net/snapp-api/admin/dashboard/admin-login",
				{
					...formData,
				}
			);
			console.log(data);
			setLoading(false);
			if (data.status) {
				console.log("first");
				localStorage.setItem("token", data.token);
				setError("");
				login();
			}
		} catch (error) {
			if (error.response.data) {
				console.log(error.response.data);
				setError(titleCase(error.response.data.message));
				setLoading(false);
			} else {
				setError("An Error Occured");
				setLoading(false);
			}

			// setLoginState(true);
		}
	};

	useEffect(() => {
		if (!state.isAuthenticated) {
			// Redirect to login if not authenticated
			return;
		} else {
			navigate("/");
		}
	}, [state]);
	return (
		<div>
			<div className='min-h-screen flex items-center justify-center bg-gray-400 p-4'>
				<form
					className='bg-white shadow-md rounded px-8 pt-6 pb-8 lg:w-1/3 mb-4 w-full'
					onSubmit={handleSubmit}
				>
					<h2 className='text-white text-2xl font-bold mb-4 text-center bg-[#D82418] py-2 rounded-t-lg'>
						Snapp Admin Dashboard
					</h2>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='email'
							type='text'
							name='email'
							placeholder='email'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-6'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='password'
						>
							Password
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='password'
							type='password'
							name='password'
							placeholder='Password'
							value={formData.password}
							onChange={handleChange}
							autoComplete='no-password'
							required
						/>
					</div>
					<div className='flex items-center justify-between'>
						{loading ? (
							<div className='bg-[#D82418] hover:bg-[#D82418] text-white  rounded w-full focus:outline-none focus:shadow-outline'>
								<FadeLoader
									loading={loading}
									cssOverride={override}
									size={40}
									aria-label='Loading Spinner'
									data-testid='loader'
								/>
							</div>
						) : (
							<button
								className='bg-[#D82418] hover:bg-[#D82418] text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline'
								type='submit'
							>
								Login
							</button>
						)}
					</div>
					{error && (
						<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mt-2 text-center'>
							{error}
						</div>
					)}
				</form>
			</div>
		</div>
	);
};
