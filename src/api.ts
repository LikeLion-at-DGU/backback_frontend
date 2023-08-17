import axios from "axios";
import snakecaseKeys from "snakecase-keys";
import camelcaseKeys from "camelcase-keys";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [
    (data, headers) => {
      if (data && !(data instanceof FormData)) {
        // 요청 데이터가 존재하는지 확인
        // 요청 시 데이터를 camelCase에서 snake_case로 변환
        return JSON.stringify(snakecaseKeys(data, { deep: true }));
      }
      return data;
    },
  ],
  transformResponse: [
    (data) => {
      if (data && typeof data === "string") {
        // 응답 데이터가 존재하고 유효한 JSON 형식인지 확인
        try {
          // 응답 시 데이터를 snake_case에서 camelCase로 변환
          return camelcaseKeys(JSON.parse(data), { deep: true });
        } catch (error) {
          return data; // JSON 파싱 에러가 발생한 경우, 그대로 반환
        }
      }
      return data; // 응답 데이터가 null 또는 undefined인 경우, 그대로 반환
    },
  ],
});

export default api;
