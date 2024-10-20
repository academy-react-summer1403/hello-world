import React, { useState } from "react";

const LikeDislike = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false); // Unliking if already liked
    } else {
      setLiked(true);
      setDisliked(false); // Ensure dislike is reset
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false); // Undo dislike if already disliked
    } else {
      setDisliked(true);
      setLiked(false); // Ensure like is reset
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Like / Dislike in React</h1>
        
        {/* Like Button */}
        <button
          className={`${
            liked ? "bg-blue-600" : "bg-gray-600"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center`}
          onClick={handleLike}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 9l-3-3m0 0L8 9m3-3v12m-5 4H6a2 2 0 01-2-2V9c0-1.1.9-2 2-2h3.28a2 2 0 011.68-1c.9 0 1.65.59 1.9 1.4l1.12 3.36a1 1 0 01-.96 1.24H6"
            ></path>
          </svg>
          {liked ? "Liked" : "Like"}
        </button>

        {/* Dislike Button */}
        <button
          className={`${
            disliked ? "bg-red-600" : "bg-gray-600"
          } hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center ml-4`}
          onClick={handleDislike}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 15l3 3m0 0l3-3m-3 3V6m5 4h2a2 2 0 002-2V9c0-1.1-.9-2-2-2h-3.28a2 2 0 00-1.68 1l-1.12 3.36a1 1 0 00.96 1.24H18"
            ></path>
          </svg>
          {disliked ? "Disliked" : "Dislike"}
        </button>
      </div>
    </div>
  );
};

export default LikeDislike;
