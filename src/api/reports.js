import axios from "axios";

const api = axios.create({
	baseURL: "https://us-central1-snapp-api-6df70.cloudfunctions.net/api",
	headers: {
		Accept: "application/json",
		// 'Access-Control-Allow-Origin': '*',
	},
});

/* Admin Dashboard Report Routes */

//Get all reports
export const GetAllReports = async () => {
	try {
		const result = await api.get("/admin/reports");
		return result;
	} catch (error) {
		return error;
	}
};

//Get Report Counts
export const GetReportCount = async () => {
	try {
		const result = await api.get("/admin/report/report-count");
		return result;
	} catch (error) {
		return error;
	}
};

//Get Report Count By Category
export const GetReportCountByCat = async () => {
	try {
		const result = await api.get("/admin/report/report-category-counts");
		return result;
	} catch (error) {
		return error;
	}
};

//Get All Status Count
export const GetStatusCount = async (_data) => {
	try {
		const result = await api.get("/admin/status-counts");
		return result;
	} catch (error) {
		return error;
	}
};

//Delete Single Report
export const DeleteReport = async (reportId) => {
	try {
		const result = await api.get(`/admin/report/delete/${reportId}`);
		return result;
	} catch (error) {
		return error;
	}
};
