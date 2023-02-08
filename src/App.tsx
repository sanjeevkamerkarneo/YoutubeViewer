import { useEffect, useState } from "react";
import _, { set } from "lodash";
import YTSearch from "youtube-api-search-typed/dist";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import { VideosDummyData } from './videosData';
import { useDispatch, useSelector } from "react-redux";
import { addComment } from './store/commentsSlice';
import { getPrimaryComments } from './service/youtube.service';
import { CommentsData } from './commentsData';
import { API_KEY } from './config/constants';


function App() {
  const dispatch = useDispatch(); // to dispatch the commets for selected video
  const [videos, setVideos] = useState(Array<any[]>()); // state to maintain all videos list
  const [selectedVideo, setSelectedVideo] = useState(Array<any[]>()); // state to maintain selected video details

  useEffect(() => {
    videoSearch("liverpool");
  }, []);

  /**
   * Function that gets the search-term and returns a list of videos
   * @param {*} term
   */
  const videoSearch = async (term: string) => {
    YTSearch({ key: API_KEY, term: term }, (videos: any) => {
      console.log("videos", videos);
      console.log("videos", JSON.stringify(videos));
      setVideos(videos);
      setSelectedVideo(videos[0]);
      fetchComments(videos[0].id.videoId);
    });

  }

  /**
   * Function will call on any video selection
   * @param {*} video details of specific video
   */
  const onVideoSelection = async (video: any) => {
    setSelectedVideo(video);
    fetchComments(video.id.videoId);
  }

  /**
   * Function thats get all the primary comments using videoId
   * @param {*} videoId
   */
  const fetchComments = async (videoId: string) => {
    console.log('on fetch comment', videoId);
    // Currently using the hadcoded comments data as google you tube api is giving cors error
    // Tried to keep api key unrestricted, tried adding IP and website whitelisting in google portal but not working
    // const comments = await getPrimaryComments(videoId); // uncomment this line and append response of this in store

    dispatch(addComment(CommentsData.items)); // if api is working we can remove this code and uncomment above code
  }

  return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      {Object.keys(selectedVideo).length > 0
        ?
        <VideoDetail video={selectedVideo} />
        :
        null
      }
      {videos.length > 0 
      ?
        <VideoList
          onVideoSelect={(selectedVideo: any) => onVideoSelection(selectedVideo)}
          videos={videos}
        />
      :
        null
      }
      
    </div>
  )

}

export default App;
