import api from "@/api";

const profileApi = () => {
  return {
    getMe: () => api.get("/me"),
    patchMe: (data: { nickname: string; intro: string }) =>
      api.patch("/me", data),
    getProfile: (id: number) => api.get(`/profile/${id}`),
    getProfilePosts: (id: number) => api.get(`/profile/${id}/posts`),
    getProfileCompletions: (id: number) =>
      api.get(`/profile/${id}/completions`),
    followProfile: (id: number) => api.post(`/profile/${id}/follow`, {}),
    reportProfile: (id: number, data: { reason: string }) =>
      api.post(`/profile/${id}/report`, { reason: data.reason }),
  };
};

export default profileApi;
