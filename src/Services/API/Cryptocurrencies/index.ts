// #region Global Imports
import { AxiosResponse } from 'axios';
// #endregion Global Imports

// #region Local Imports
import axiosInstance from '@Services/API';
// #endregion Local Imports

function fetchCryptos(): Promise<AxiosResponse<Crypto>> {
    return axiosInstance.get(`/v1/cryptocurrency/listings/latest`);
}

export default fetchCryptos;
