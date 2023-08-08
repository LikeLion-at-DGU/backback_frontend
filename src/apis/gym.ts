import api from '@/api';

interface GymQueryParams {
    address?: string;
    location?: string;
  }

const gymApi = () => {
    return {
        getGyms: (address?: string, location?: string) => {
            const queryParams : GymQueryParams = {}
            if (address) queryParams.address = address;
            if (location) queryParams.location = location;
            return api.get('/gyms', {params: queryParams})
        },
        getGym: (id: number) => api.get(`/gyms/${id}`),
    }
};

export default gymApi;
