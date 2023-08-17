import api from "@/api";

const gymApi = () => {
  return {
    getGyms: (query: { search?: string }) => {
      //완료
      const queryParams: { search?: string } = {};
      if (query.search) queryParams.search = query.search;
      return api.get("/gyms", { params: queryParams });
    },
    getGymsBylocation: (
      data: { latitude: number; longitude: number } //보류
    ) => api.post(`/gyms/use-location`, data),
    getGym: (id: number | string) => api.get(`/gyms/${id}`), //완료
    reportGym: (id: number | string, data: { reason: string }) =>
      api.post(`/gyms/${id}/report`, data),
    getGymReviews: (id: number | string) => api.get(`/gyms/${id}/reviews`), //완료
    postGymReview: (
      //완료
      id: number | string,
      data: { content: string; key: string }
    ) => api.post(`/gyms/${id}/reviews`, data),
    reportReview: (id: number | string, data: { reason: string }) =>
      api.post(`/reviews/${id}/report`, data),
  };
};

export default gymApi;
