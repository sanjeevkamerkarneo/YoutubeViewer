import { useEffect } from "react";
import CommentList from "./comment_list";

interface IProps {
  video: any;
}

interface IState {
  term?: string;
}

const VideoDetail = (props: IProps) => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  const videoId = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={props.video.snippet.title}
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
      <CommentList
      ></CommentList>
    </div>
  );
};

export default VideoDetail;
