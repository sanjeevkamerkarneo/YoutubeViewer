import React from "react";
import VideoListItem from "./video_list_item";

interface IProps {
  videos: any;
  onVideoSelect: any;
}

const VideoList = (props: IProps) => {
  const videoItems = props.videos.map((video: any) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
