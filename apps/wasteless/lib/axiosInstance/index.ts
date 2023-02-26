import axios, { AxiosRequestConfig } from "axios";

// import { User } from '../../../shared/types';
import { baseUrl } from "./constants";

// interface jwtHeader {
//   Authorization?: string;
// }

// export function getJWTHeader(user: User): jwtHeader {
//   return { Authorization: `Bearer ${user.token}` };
// }

const config: AxiosRequestConfig = { baseURL: baseUrl, timeout: 15000 };
export const axiosInstance = axios.create(config);
