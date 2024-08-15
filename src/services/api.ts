import { env } from "@/env";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: env.API_BASE_URL,
})