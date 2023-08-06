import axios from 'axios';
import snakecaseKeys from 'snakecase-keys';
import camelcaseKeys from 'camelcase-keys';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (data, headers) => {
      // 요청 데이터가 존재하는지 확인
      if (data) {
        // 요청 시 데이터를 camelCase에서 snake_case로 변환
        return JSON.stringify(snakecaseKeys(data, { deep: true }));
      }
      return data;
    },
  ],
  transformResponse: [
    (data) => {
      // 응답 데이터가 존재하는지 확인
      if (data) {
        // 응답 시 데이터를 snake_case에서 camelCase로 변환
        return camelcaseKeys(JSON.parse(data), { deep: true });
      }
      return data;
    },
  ],
});

export default api;
