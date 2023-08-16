import api from "@/api";

const profileApi = () => {
  return {
    getMe: () => api.get("/me"),
    patchMe: (data: { nickname: string; intro: string }) =>
      api.patch("/me", data),
    getProfile: (id: number | string) => api.get(`/profile/${id}`),
    getProfilePosts: (id: number | string) => api.get(`/profile/${id}/posts`),
    getProfileCompletions: (id: number | string) =>
      api.get(`/profile/${id}/completions`),
    followProfile: (id: number | string) =>
      api.post(`/profile/${id}/follow`, {}),
    reportProfile: (id: number | string, data: { reason: string }) =>
      api.post(`/profile/${id}/report`, { reason: data.reason }),
  };
};

export default profileApi;
