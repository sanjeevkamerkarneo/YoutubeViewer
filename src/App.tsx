import { useEffect, useState } from "react";
import _, { set } from "lodash";
import YTSearch from "youtube-api-search-typed/dist";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import { VideosDummyData } from './videosData';
import { RootState } from './store/store';
import { useDispatch, useSelector } from "react-redux";
import { addComment } from './store/commentsSlice';
import { getPrimaryComments } from './service/youtube.service';
import { CommentsData } from './commentsData';
import CommentList from "./components/comment_list";

// const API_KEY = "AIzaSyBZq4Ez5kKMTXITuTpaDxlu98MDr4g05fY";
const API_KEY = 'AIzaSyBZq4Ez5kKMTXITuTpaDxlu98MDr4g05fY';

function App() {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState(Array<any[]>());
  const [comments, setComments] = useState(Array<any[]>());
  const [selectedVideo, setSelectedVideo] = useState(Array<any[]>());

  useEffect(() => {
    console.log('VideosDummyData', VideosDummyData);
    videoSearch("liverpool");
    fetchComments(VideosDummyData[0]?.id?.videoId);
  }, []);

  // const updateComments = async (data: any) => {
  //   setComments(data);
  // }

  /**
   * Function that gets the search-term and returns a list of videos
   * @param {*} term
   */
  const videoSearch = async (term: string) => {
    console.log('vid --', VideosDummyData);
    // _.debounce((term: string) => {
    YTSearch({ key: API_KEY, term: term }, (videos: any) => {
      console.log("videos", videos);
      console.log("videos", JSON.stringify(videos));
      setVideos(videos);
      setSelectedVideo(videos[0]);
      fetchComments(videos[0].id.videoId);
    });
    // }, 300);

  }

  const onVideoSelection = async (video: any) => {
    setSelectedVideo(video);
    fetchComments(video.id.videoId);
  }

  const fetchComments = async (videoId: string) => {
    console.log('on fetch comment', videoId);
    const comments = await getPrimaryComments(videoId);
    // console.log('comments from api', comments);
    // console.log('comments from api', JSON.stringify(comments));

    dispatch(addComment(CommentsData.items));
  }

  /**
   * Lifecycle method that is responsible to make the component visible to the browser
   */
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
