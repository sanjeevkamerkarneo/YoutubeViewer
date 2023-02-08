import React, { useEffect } from 'react';
import styles from '../style/comments.module.scss';
import ProfilePic from '../assets/profile-pic.webp';
import ThumbsDown from "../assets/thumbs-down.png";
import ThumbsUp from "../assets/thumbs-up.png";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

/**
   * Function is returning the view for single comment
   * @param {*} data
   */
const Comment = (data: any) => (
  <div className={styles.CommentWrapper}>
    <div className={styles.ProfileView}>
      <img className={styles.ProfilePic} src={data?.data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
    </div>
    <div className={styles.DetailsView}>
      <div className={styles.CommentInfo}>
        <div className={styles.Author}>
          <div className={styles.Name}>{data?.data?.snippet?.topLevelComment?.snippet?.authorDisplayName}</div>
          <div className={styles.Duration}>1 month ago</div>
        </div>
        <div className={styles.Comment}>
          {data?.data?.snippet?.topLevelComment?.snippet?.textDisplay}
        </div>
        <div className={styles.ButtonActions}>
          <div className={styles.ThumbsUp}>
            <img src={ThumbsUp} />
            <span>{data?.data?.snippet?.topLevelComment?.snippet?.likeCount}</span>
          </div>

          <div className={styles.ThumbsDown}>
            <img src={ThumbsDown} />
          </div>

          <button className={styles.Button}>Reply</button>
        </div>
      </div>
    </div>
  </div>
);

const CommentList = () => {
  // fetching comments from store 
  const comments: Array<any> = useSelector(
    (state: RootState) => {
      return state.comments.comments
    }
  );

  return (
    <div className={styles.CommentsSection}>
      <div className={styles.AddComment}>
        <img src={ProfilePic} />
        <input placeholder="Add a Comment" />
      </div>
      {comments.map((comment: any) => (
        <Comment
          data={comment}
        />
      ))}
    </div>
  )

};

export default CommentList;