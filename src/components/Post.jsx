/* eslint-disable no-unused-vars */
import { Avatar } from '@material-ui/core';
import {
  ChatBubbleOutlineRounded,
  FavoriteBorderOutlined,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from '@material-ui/icons';
import React from 'react';
import './Post.css';
// 2:04
function Post(props) {
  const {
    displayName, userName, verified, text, image, avatar,
  } = props;

  return (

    <div className="post">
      <div className="post_avatar">
        <Avatar src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Divesh Keswani
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
                @IronManFan
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>Here is our first twitter post</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/3o7bu9QJvnFxxFXaes/giphy.gif"
          alt="gif"
        />
        <div className="post__footer">
          <ChatBubbleOutlineRounded fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorderOutlined fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
