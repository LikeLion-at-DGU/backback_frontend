import api from "@/api";

interface GymsQueryParams {
  address?: string;
  location?: string;
}

const gymApi = () => {
  return {
    getGyms: (query: GymsQueryParams) => {
      const queryParams: GymsQueryParams = {};
      if (query.address) queryParams.address = query.address;
      if (query.location) queryParams.location = query.location;
      return api.get("/gyms", { params: queryParams });
    },
    getGym: (id: number) => api.get(`/gyms/${id}`),
  };
};

export default gymApi;
