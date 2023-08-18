import api from "@/api";

interface Completion {
  title: string;
  content: string;
  image: File;
}

const completionApi = () => {
  return {
    getCompletions: (query: { page: number }) =>
      api.get("/completions", { params: query }),
    postCompletion: (data: Completion) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("image", data.image);
      return api.post(`/completions`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    getCompletion: (id: number | string) => api.get(`/completions/${id}`),
    patchCompletion: (
      id: number | string,
      data: { title: string; content: string }
    ) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      api.patch(`/completions/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    deleteCompletion: (id: number | string) => api.delete(`/completions/${id}`),
    likeCompletion: (id: number | string) =>
      api.post(`/completions/${id}/like`, {}),
    reportCompletion: (id: number | string, data: { reason: string }) =>
      api.post(`/completions/${id}/report`, { reason: data.reason }),
    privateCompletion: (id: number | string, data: { isPrivate: boolean }) =>
      api.patch(`/completions/${id}/private`, { isPrivate: data.isPrivate }),
  };
};

export default completionApi;
