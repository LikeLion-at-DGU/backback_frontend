import api from "@/api";

const profileApi = () => {
  return {
    getMe: () => api.get("/me"),
    patchMe: (data: { nickname: string; intro: string }) =>
      api.patch("/me", data),
    getProfile: (id: number) => api.get(`/profiles/${id}`),
    getProfilePosts: (id: number, query: { page: number }) =>
      api.get(`/profiles/${id}/posts`, { params: query }),
    getProfileCompletions: (id: number, query: { range: string }) =>
      api.get(`/profiles/${id}/completions`, { params: query }),
    followProfile: (id: number) => api.post(`/profiles/${id}/follow`, {}),
    reportProfile: (id: number) => api.post(`/profiles/${id}/report`),
  };
};

export default profileApi;
