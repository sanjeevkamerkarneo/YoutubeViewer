import React from "react";

interface IProps {
  video: any;
  onVideoSelect: any;
}

const VideoListItem = (props: IProps) => {
  const imageUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.onVideoSelect(props.video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="video thumbnail" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{props.video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
