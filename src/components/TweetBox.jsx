import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css';
import db from '../firebase';

function TweetBox() {
  const [tweetMsg, setTweetMsg] = useState({
    text: '',
    image: '',
    displayName: 'defaultUser',
    userName: 'nonSignedUser',
    verified: false,
  });

  function handleTweetInput(event) {
    setTweetMsg((oldVal) => ({ ...oldVal, [event.target.name]: event.target.value }));
  }

  function handleSubmitTweet(event) {
    event.preventDefault();
    db.collection('posts').add(tweetMsg);
    setTweetMsg({
      text: '',
      image: '',
      displayName: 'defaultUser',
      userName: 'nonSignedUser',
      verified: false,
    });
  }
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" />
          <input type="text" name="text" onChange={handleTweetInput} placeholder="What's happening ?" value={tweetMsg.text} />
        </div>
        <input type="text" onChange={handleTweetInput} className="tweetBox__image" name="image" placeholder="Enter image url here" value={tweetMsg.image} />
        <Button onClick={handleSubmitTweet} className="tweetbox__Button">Tweet</Button>
      </form>

    </div>
  );
}

export default TweetBox;
