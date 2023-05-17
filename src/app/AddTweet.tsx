'use client';

import React, { useState } from 'react';
import {TweetService, ts} from "@/app/tweet-service";


const AddTweet = ({ add }) => {
  const [tweetText, setTweetText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    add(tweetText);
    setTweetText('');
  };

  const handleChange = (event) => {
    setTweetText(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-lg mx-auto mt-4">
        <div className="bg-white shadow-md rounded-md p-4">
          <h5 className="text-xl font-bold mb-4">Compose a Tweet</h5>
          <form>
            <div className="mb-4">
              <textarea className="w-full border rounded-md p-2 text-gray-700" rows={3} placeholder="What's happening?"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Tweet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;