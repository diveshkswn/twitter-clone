/* eslint-disable no-unused-vars */
import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import {
  ChatBubbleOutlineRounded,
  FavoriteBorderOutlined,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from '@material-ui/icons';

import './Post.css';

const Post = forwardRef((props, ref) => {
  const {
    displayName, userName, verified, text, image, avatar,
  } = props;

  return (

    <div className="post" ref={ref}>
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {`${displayName} `}
              <span className="post__headerSpecial">
                {verified && <VerifiedUser className="post__badge" />}
                {` ${userName}`}
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        {/* image conditional rendering */}
        {image ? (
          <img
            src={image}
            alt="gif"
          />
        ) : <div />}

        <div className="post__footer">
          <ChatBubbleOutlineRounded fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorderOutlined fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
