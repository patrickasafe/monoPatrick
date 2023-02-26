import axios, { AxiosRequestConfig } from "axios";

// import { User } from '../../../shared/types';
import { baseURL } from "./constants";

// interface jwtHeader {
//   Authorization?: string;
// }

// export function getJWTHeader(user: User): jwtHeader {
//   return { Authorization: `Bearer ${user.token}` };
// }

const config: AxiosRequestConfig = { baseURL: baseURL, timeout: 15000 };
export const axiosInstance = axios.create(config);
