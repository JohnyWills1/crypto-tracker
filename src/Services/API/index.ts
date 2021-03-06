// #region Global Imports
import axios from 'axios';
// #endregion Global Imports

// #region Local Imports
import APIError from './APIError';
import fetchCryptos from './Cryptocurrencies';
// #enregion Local Imports

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axiosInstance.defaults.headers['X-CMC_PRO_API_KEY'] =
    process.env.NEXT_PUBLIC_API_KEY;
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
export { fetchCryptos };
