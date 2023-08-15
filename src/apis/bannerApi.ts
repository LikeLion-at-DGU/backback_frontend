import api from "@/api";

const bannerApi = () => {
  return {
    getBanners: () => api.get("/banners"),
  };
};

export default bannerApi;
