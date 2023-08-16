import api from "@/api";

const gymApi = () => {
  return {
    getGyms: (query: { search?: string }) => {
      const queryParams: { search?: string } = {};
      if (query.search) queryParams.search = query.search;
      return api.get("/gyms", { params: queryParams });
    },
    getGymsBylocation: (data: { latitude: number; longitude: number }) =>
      api.post(`/gyms/use-location`, data),
    getGym: (id: number | string) => api.get(`/gyms/${id}`),
    reportGym: (id: number | string, data: { reason: string }) =>
      api.post(`/gyms/${id}/report`, data),
    getGymReviews: (id: number | string) => api.get(`/gyms/${id}/reviews`),
    postGymReview: (
      id: number | string,
      data: { content: string; key: string }
    ) => api.post(`/gyms/${id}/reviews`, data),
    deleteReview: (id: number | string) => api.delete(`/reviews/${id}`),
    reportReview: (id: number | string, data: { reason: string }) =>
      api.post(`/reviews/${id}/report`, data),
  };
};

export default gymApi;
