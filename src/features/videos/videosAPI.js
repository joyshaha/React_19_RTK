import { axiosInstanceJsonPlaceholder } from '../../utils/axios';

// export const getVideos = async () => {
//     const response = await axiosInstance.get('/todos?_limit=5');
//     return response;
// };

export const getVideos = async (tags, search) => {
    let queryString = '';
    if (tags?.length > 0) {
        queryString += tags.map(tag => `tags_like=${tag}`).join('&');
    }
    if (search && search?.length > 0) {
        queryString += `&q=${search}`;
    }
    const response = await axiosInstanceJsonPlaceholder.get(`/videos/?${queryString}&_limit=10`);
    return response;
};

// export const fetchVideos = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/videos');
//     const videos = await response.json();
//     return videos;
// };


// import axios from 'axios';
// export const fetchVideos = async () => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/videos');
//     return response.data;
// };


