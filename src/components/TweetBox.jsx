import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

// 1:38
function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" />
        </div>
        <Button>Tweet</Button>
      </form>

    </div>
  );
}

export default TweetBox;
