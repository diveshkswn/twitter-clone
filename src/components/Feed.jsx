/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Feed.css';
import FlipMove from 'react-flip-move';
import Post from './Post';
import TweetBox from './TweetBox';
import db from '../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(async () => {
  //   const result = await db.collection('posts').get();
  //   const data = [];
  //   result.forEach((doc) => { data.push(doc.data()); });
  //   setPosts(data);
  // }, []);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  function populatePosts(eachPost, index) {
    if (eachPost.text) {
      return (

        <Post
          key={index}
          displayName={eachPost.displayName}
          userName={eachPost.userName}
          verified={eachPost.verified}
          text={eachPost.text}
          image={eachPost.image}
          avatar={eachPost.avatar}
        />
      );
    }

    return null;
  }

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      {/* Posts */}
      {/* displayName, userName, verified, text, image, avatar, */}

      <Post
        displayName="Iron Man"
        userName="TonyStark"
        verified
        text="This is our first Tweet"
        image="https://media.giphy.com/media/3o7bu9QJvnFxxFXaes/giphy.gif"
        avatar="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
      />

      {/* populating posts */}
      <FlipMove>
        {posts.map(populatePosts)}
      </FlipMove>
    </div>
  );
}

export default Feed;
