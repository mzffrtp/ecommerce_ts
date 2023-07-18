import { FakeStoreProductType } from "@/shared/types/types";
import axios, { Axios, AxiosResponse } from "axios";

export class FakeStoreApi {
  private readonly axiosClient: Axios;

  constructor(private readonly baseUrl: string) {
    this.axiosClient = axios;
    this.axiosClient.defaults.baseURL = baseUrl;
  }

  async products(limit?: number) {
    const proRes: AxiosResponse<FakeStoreProductType[]> =
      await this.axiosClient.get<FakeStoreProductType[]>("products", {
        params: {
          limit: limit,
        },
      });
    return proRes;
  }
}
