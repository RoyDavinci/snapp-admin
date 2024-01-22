import axios from "axios";

const api = axios.create({
	baseURL: "https://us-central1-snapp-api-6df70.cloudfunctions.net/api",
	headers: {
		Accept: "application/json",
		// 'Access-Control-Allow-Origin': '*',
	},
});

/* Admin Dashboard User Routes */

//Get all users and their details
export const GetAllUsers = async () => {
	try {
		const result = await api.get("/admin/users");
		return result;
	} catch (error) {
		return error;
	}
};

//Get number of users accounts
export const GetUsersCount = async () => {
	try {
		const result = await api.get("/admin/user/user-count");
		return result;
	} catch (error) {
		return error;
	}
};

//Get All Users Location
export const GetAllUsersLoc = async () => {
	try {
		const result = await api.get("/admin/location/users");
		return result;
	} catch (error) {
		return error;
	}
};

//Suspend User Account
export const SuspendUser = async (userId) => {
	try {
		const result = await api.delete(`/admin/user/suspend/${userId}`);
		return result;
	} catch (error) {
		return error;
	}
};

//NODE_MAJOR=20

// select count(pk_ssml_logid), ssml_network_id  from smpp_sms_message_log WHERE
//       ssml_calling_number = 'FidelitySMS'  and pk_ssml_log_time  between '2023-12-01 00:00:00' and '2023-12-01 23:59:59'
//     and ssml_source=1 and ssml_direction=1  group by ssml_network_id;

// SELECT COUNT(pk_ssml_logid) AS message_count, ssml_result, ssml_network_id FROM smpp_sms_message_log WHERE ssml_calling_number = 'FidelitySMS' AND pk_ssml_log_time >= '2023-12-01 00:00:00' AND pk_ssml_log_time <= '2023-12-01 23:59:59' and ssml_source=1 and ssml_direction=1 GROUP BY ssml_network_id, ssml_result;
