import api from '@/api';

const gymApi = () => {
    return {
        getGyms: () => api.get('/gyms'),
        getGym: (id: number) => api.get(`/gyms/${id}`),
    }
};

export default gymApi;
