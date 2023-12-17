import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_API_URL } from "@/utils/constants";

export interface ApiResponse<T> {
  data: T;
  status: number;
}

interface ApiProvider {
  get<T>(path: string, options?: AxiosRequestConfig): Promise<T>;
  post<T, D>(path: string, data?: D, options?: AxiosRequestConfig): Promise<T>;
  put<T, D>(path: string, data?: D, options?: AxiosRequestConfig): Promise<T>;
  remove<T>(path: string, options?: AxiosRequestConfig): Promise<T>;
}

type CustomAxiosInstance = AxiosInstance & {
  [key: string]: any;
};

export const createApiProvider = (): ApiProvider => {
  const instance: CustomAxiosInstance = axios.create({
    baseURL: BASE_API_URL,
  });

  const makeRequest = async <T>(
    method: keyof CustomAxiosInstance,
    path: string,
    data?: any,
    options?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await instance[method](
      path,
      data,
      options,
    );

    if (response.status < 200 || response.status > 300) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  };

  return {
    get: <T>(path: string, options?: AxiosRequestConfig) =>
      makeRequest<T>("get", path, null, options),
    post: <T, D>(path: string, data?: D, options?: AxiosRequestConfig) =>
      makeRequest<T>("post", path, data, options),
    put: <T, D>(path: string, data?: D, options?: AxiosRequestConfig) =>
      makeRequest<T>("put", path, data, options),
    remove: <T>(path: string, options?: AxiosRequestConfig) =>
      makeRequest<T>("delete", path, null, options),
  };
};
