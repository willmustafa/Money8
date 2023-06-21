import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import store from "../store/store";

class ApiCall {
  private instance: AxiosInstance;
  private token: string;

  constructor() {
    this.instance = axios.create();

    // Get the initial token from the Redux store
    this.token = store.getState().user.token;

    // Intercept requests to add the authorization header
    this.instance.interceptors.request.use(
      (config) => {
        config.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
        config.headers.Authorization = `Bearer ${this.token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

    public setToken(token: string): void {
      this.token = token;

      // Update the authorization header for future requests
      this.instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
      return this.instance.get<T>(url, config);
    }

    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
      return this.instance.post<T>(url, data, config);
    }

  // Add more Axios methods as needed (e.g., put, delete, etc.)
}

export const Api = new ApiCall();
export default Api;
