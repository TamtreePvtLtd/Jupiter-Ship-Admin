import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { useEffect, useState, useCallback, useMemo } from "react";


export const axiosInstanceWithCredential = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  withCredentials: false,
});

export const axiosInstanceWithOutCredential = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstanceWithMultipartFormData = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});















const useAxiosLoader = (_axiosInstance: AxiosInstance) => {
  const [counter, setCounter] = useState(0);

  const inc = useCallback(
    () => setCounter((counter) => counter + 1),
    [setCounter]
  ); // Increment counter
  const dec = useCallback(
    () => setCounter((counter) => counter - 1),
    [setCounter]
  ); // Decrement counter

  const interceptors = useMemo(
    () => ({
      request: (config: InternalAxiosRequestConfig) => {
        inc();
        return config;
      },
      response: (response: AxiosResponse) => {
        dec();
        return response;
      },
      error: (error: any) => {
        dec();
        return Promise.reject(error);
      },
    }),
    [inc, dec]
  );

  useEffect(() => {
    // Add request interceptors
    _axiosInstance.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );
    // Add response interceptors
    _axiosInstance.interceptors.response.use(
      interceptors.response,
      interceptors.error
    );
    return () => {
      // Eject interceptors when done
      _axiosInstance.interceptors.request.eject(interceptors.request as any);
      _axiosInstance.interceptors.response.eject(interceptors.response as any);
      _axiosInstance.interceptors.response.eject(interceptors.error as any);
    };
  }, [interceptors]);

  return [counter > 0];
};

export default useAxiosLoader;

// Configuration objects with explicit types
const withCredentialsConfig = {
  withCredentials: true,
} as AxiosRequestConfig;

const withoutCredentialsConfig = {
  withCredentials: false,
} as AxiosRequestConfig;

// HTTP request methods with credentials
const httpWithCredentials = {
  get: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithCredential.get<T>(url, {
      ...config,
      ...withCredentialsConfig,
    }),
  post: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithCredential.post<T>(url, data, {
      ...config,
      ...withCredentialsConfig,
    }),
  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithCredential.delete<T>(url, {
      ...config,
      ...withCredentialsConfig,
    }),
  put: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithCredential.put<T>(url, data, {
      ...config,
      ...withCredentialsConfig,
    }),
};

// HTTP request methods without credentials
const httpWithoutCredentials = {
  get: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithOutCredential.get<T>(url, config),
  post: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithOutCredential.post<T>(url, data, config),
  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithOutCredential.delete<T>(url, config),
  put: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> =>
    axiosInstanceWithOutCredential.put<T>(url, data, config),
};

// HTTP request methods for multipart/form-data
const httpWithMultipartFormData = axiosInstanceWithMultipartFormData;
httpWithMultipartFormData.defaults.withCredentials = true;

export {
  httpWithCredentials,
  httpWithoutCredentials,
  httpWithMultipartFormData,
};
