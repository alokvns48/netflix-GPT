import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-36 md:w-48 pr-4 hover:scale-95">
      <img
        className="rounded-lg"
        src={IMAGE_CDN_URL + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
