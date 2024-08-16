import {axiosInstance} from './api'
import axios,{ AxiosResponse } from 'axios'

const fetcher = async<T> ([url,params]: [string,Record<string,string>]) => {

    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res: AxiosResponse<T,any> = await axiosInstance.get(url,{params});
        return res.data;

    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.response?.data?.message || err.message || 'An error occurred')
        }
        throw new Error('An unexpected error occurred');
    }

}

export {fetcher};