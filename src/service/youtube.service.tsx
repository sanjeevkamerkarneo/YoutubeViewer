import { axiosInstance } from './axios';
import { GetYouTubeComments } from '../config/api-endpoint';
import { API_KEY } from '../config/constants';

export const getPrimaryComments = async (videoId: string) => {
    // return axiosInstance.get
    var params = {
        part: 'id, snippet, replies',
        key: API_KEY,
        videoId: videoId,
    }

    return await axiosInstance.get(GetYouTubeComments, { params: params });
}