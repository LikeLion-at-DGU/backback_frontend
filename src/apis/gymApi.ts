import api from "@/api";

const gymApi = () => {
  return {
    getGyms: (query: { search?: string; page?: number }) => {
      //완료
      const queryParams: { search?: string; page?: number } = {};
      if (query.search) queryParams.search = query.search;
      if (query.page) queryParams.page = query.page;
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
