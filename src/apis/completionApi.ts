import api from "@/api";

interface Completion {
  title: string;
  content: string;
  image: File;
}

const completionApi = () => {
  return {
    getCompletions: () => api.get("/completions"),
    postCompletion: (data: Completion) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("image", data.image);
      return api.post(`/completions`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    getCompletion: (id: number) => api.get(`/completions/${id}`),
    patchCompletion: (id: number, data: { title: string; content: string }) => {
      api.patch(`/completions/${id}`, data);
    },
    deleteCompletion: (id: number) => api.delete(`/completions/${id}`),
    likeCompletion: (id: number) => api.post(`/completions/${id}/like`, {}),
    reportCompletion: (id: number, data: { reason: string }) =>
      api.post(`/completions/${id}/report`, { reason: data.reason }),
  };
};

export default completionApi;
