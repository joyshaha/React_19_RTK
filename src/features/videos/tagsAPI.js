import { axiosInstanceJsonPlaceholder } from '../../utils/axios';

export const getTags = async () => {
    const response = await axiosInstanceJsonPlaceholder.get('/posts');
    return response.data;
};