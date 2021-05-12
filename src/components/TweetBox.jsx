import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" />
          <input type="text" placeholder="What's happening ? " />
        </div>
        <input type="text" className="tweetBox__image" placeholder="ENter image url here" />
        <Button className="tweetbox__Button">Tweet</Button>
      </form>

    </div>
  );
}

export default TweetBox;
