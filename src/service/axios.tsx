import axios from "axios";
import { GetYouTubeComments } from '../config/api-endpoint';
import { API_KEY } from '../config/constants';

export const axiosInstance = axios.create({
    baseURL: GetYouTubeComments,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar', 'Access-Control-Allow-Origin': '*' },
    withCredentials: false
});

// instance.defaults.headers.common['Authorization'] = 'Bearer' + API_KEY;

// GET https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

// https://content-youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM
