/* eslint-disable no-unused-vars */
import { Avatar } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
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
              <span>
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>Here is our first twitter clone</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
