import { FSProductType } from "@/shared/types/types";
import axios, { Axios, AxiosResponse } from "axios";

export class FSApi {
  private readonly axiosClient: Axios;

  constructor(private readonly baseUrl: string) {
    this.axiosClient = axios;
    this.axiosClient.defaults.baseURL = baseUrl;
  }

  async products(limit?: number, sort?: number) {
    const proRes: AxiosResponse<FSProductType[]> = await this.axiosClient.get<
      FSProductType[]
    >("/products", {
      params: {
        limit: limit,
        sort: sort,
      },
    });
    return proRes;
  }
}

export default function useFSApi(): FSApi {
  return new FSApi("https://fakestoreapi.com");
}
