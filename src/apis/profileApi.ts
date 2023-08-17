import api from "@/api";

const profileApi = () => {
  return {
    getMe: () => api.get("/me"),
    patchMe: (data: { nickname: string; intro: string }) =>
      api.patch("/me", data),
    getProfile: (id: number) => api.get(`/profiles/${id}`),
    getProfilePosts: (id: number) => api.get(`/profiles/${id}/posts`),
    getProfileCompletions: (id: number, query: { range: string }) =>
      api.get(`/profiles/${id}/completions`, { params: query }),
    followProfile: (id: number) => api.post(`/profiles/${id}/follow`, {}),
    reportProfile: (id: number, data: { reason: string }) =>
      api.post(`/profiles/${id}/report`, { reason: data.reason }),
  };
};

export default profileApi;
