import { axiosInstanceJsonPlaceholder } from '../../utils/axios';

export const getVideo = async (id) => {
    const response = await axiosInstanceJsonPlaceholder.get(`/videos/${id}`);
    return response.data;
};
