import api from "@/api";

const gymApi = () => {
  return {
    getGyms: (query: { address: string }) => {
      const queryParams: { address?: string } = {};
      if (query.address) queryParams.address = query.address;
      return api.get("/gyms", { params: queryParams });
    },
    getGymsBylocation: (data: { latitude: number; longitude: number }) =>
      api.post(`/gyms/use-location`, data),
    getGym: (id: number) => api.get(`/gyms/${id}`),
    reportGym: (id: number, data: { reason: string }) =>
      api.post(`/gyms/${id}/report`, data),
    getGymReviews: (id: number) => api.get(`/gyms/${id}/reviews`),
    postGymReview: (id: number, data: { content: string; key: string }) =>
      api.post(`/gyms/${id}/reviews`, data),
    deleteReview: (id: number) => api.delete(`/reviews/${id}`),
    reportReview: (id: number, data: { reason: string }) =>
      api.post(`/reviews/${id}/report`, data),
  };
};

export default gymApi;
