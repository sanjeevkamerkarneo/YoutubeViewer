import { axiosInstance } from './axios';
import { GetYouTubeComments } from '../config/api-endpoint';
import { API_KEY } from '../config/constants';

export const    getPrimaryComments = async (videoId: string) => {
    // return axiosInstance.get
    return await axiosInstance.get(GetYouTubeComments, { params: { videoId: videoId, key: API_KEY } });
}