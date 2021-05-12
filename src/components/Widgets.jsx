/* eslint-disable react/no-unescaped-entities */
import { SearchOutlined } from '@material-ui/icons';
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from 'react';
import './Widgets.css';

// 2 : 33
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchOutlined className="widgets__SeachIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetsContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ height: 300 }}
        />
        <TwitterTweetEmbed tweetId="1390387635961610242" />
        <TwitterTweetEmbed tweetId="1390728144676601857" />
        <TwitterOnAirButton
          id="1390728144676601857"
        />

      </div>
    </div>

  );
}

export default Widgets;
