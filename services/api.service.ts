import { http } from './api'

class ApiService {
  async getFilters () {
    const res = await http.get<any>('/filters');
    return res.data;
  }
  async getFiltersById (filterId: string, payload: any) {
    const res = await http.post<any>(`/filters/${filterId}`, payload);
    return res.data;
  }
}

export const apiService = new ApiService()
