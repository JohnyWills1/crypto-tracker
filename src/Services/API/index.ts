// #region Global Imports
import axios from 'axios';
// #endregion Global Imports

// #region Local Imports
import APIError from './APIError';
// #enregion Local Imports

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong',
        ),
);

export default axiosInstance;
export type { APIError };
// export * from './Auth';
