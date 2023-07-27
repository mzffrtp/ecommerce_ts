import { FSCategoryType, FSProductType } from "@/shared/types/types";
import axios, { Axios, AxiosResponse } from "axios";

export class FSApi {
  private readonly axiosClient: Axios;

  constructor(private readonly baseUrl: string) {
    this.axiosClient = axios;
    this.axiosClient.defaults.baseURL = baseUrl;
  }

  async products(limit?: number, sort?: number) {
    const prosRes: AxiosResponse<FSProductType[]> = await this.axiosClient.get<
      FSProductType[]
    >("products", {
      params: {
        limit: limit,
        sort: sort,
      },
    });
    return prosRes;
  }

  async getProduct(productId: number): Promise<FSProductType> {
    const proRes: AxiosResponse<FSProductType> =
      await this.axiosClient.get<FSProductType>(`products/${productId}`);
    return proRes.data;
  }

  async categories() {
    const catRes: AxiosResponse<FSCategoryType> =
      await this.axiosClient.get<FSCategoryType>("products/categories");
    return catRes.data;
  }

  async getCategory(category: string): Promise<FSProductType[]> {
    const proCatRes: AxiosResponse<FSProductType[]> =
      await this.axiosClient.get<FSProductType[]>(
        "products/category/" + category
      );
    return proCatRes.data;
  }
}

export default function useFSApi(): FSApi {
  return new FSApi("https://fakestoreapi.com");
}
