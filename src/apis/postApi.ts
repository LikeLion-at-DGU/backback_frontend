import api from "@/api";

interface PostsQueryParams {
  followers?: boolean;
  purpose?: string;
  exercise?: string;
  type?: "ORDINARY" | "PRO";
}

interface Post {
  title: string;
  purpose?: number;
  exercise?: number;
  content: string;
  type?: "ORDINARY" | "PRO";
  images?: File[]; // 아마 파일일텐데
}

const postApi = () => {
  return {
    getPosts: (query: PostsQueryParams) => {
      const queryParams: PostsQueryParams = {};
      if (query.followers) {
        queryParams.followers = query.followers;
      }
      if (query.purpose) {
        queryParams.purpose = query.purpose;
      }
      if (query.exercise) {
        queryParams.exercise = query.exercise;
      }
      if (query.type) {
        queryParams.type = query.type;
      }
      return api.get("/posts", { params: queryParams });
    },
    getPurposes: () => api.get("/purposes"),
    getExercises: () => api.get("/exercises"),
    getHotOrdinaryPosts: () => api.get("/posts/hot-ord"),
    getHotProPosts: () => api.get("/posts/hot-pro"),
    postPost: (data: Post) => {
      const formData = new FormData();
      formData.append("title", data.title);
      if (data.purpose) formData.append("purpose", data.purpose.toString());
      if (data.exercise) formData.append("exercise", data.exercise.toString());
      formData.append("content", data.content);
      formData.append("type", data.type ? data.type : "ORDINARY");
      if (data.images && data.images.length > 0) {
        data.images.forEach((image, index) => {
          formData.append(`images`, image);
        });
      }
      return api.post("/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    getPost: (id: number | string) => api.get(`/posts/${id}`),
    patchPost: (id: number | string, data: Post) => {
      const formData = new FormData();
      formData.append("title", data.title);
      if (data.purpose) formData.append("purpose", data.purpose.toString());
      if (data.exercise) formData.append("exercise", data.exercise.toString());
      formData.append("content", data.content);
      return api.patch(`/posts/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    deletePost: (id: number | string) => api.delete(`/posts/${id}`),
    reportPost: (id: number | string, data: { reason: string }) =>
      api.post(`/posts/${id}/report`, { reason: data.reason }),
    scrapPost: (id: number | string) => api.post(`/posts/${id}/clip`, {}),
    scrapDelete: (id: number | string) => api.delete(`/posts/${id}/clip`),
    scrappedPost: () => api.get(`/posts/clips`),
    likePost: (id: number | string) => api.post(`/posts/${id}/like`, {}),
    getPostComments: (id: number | string) => api.get(`/posts/${id}/comments`),
    postPostComment: (id: number | string, data: { content: string }) =>
      api.post(`/posts/${id}/comments`, data),
    deleteComment: (id: number | string) => api.delete(`/comments/${id}`),
    reportComment: (id: number | string, data: { reason: string }) =>
      api.post(`/comments/${id}/report`, { reason: data.reason }),
  };
};

export default postApi;
