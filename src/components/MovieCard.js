import { CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 p-2">
      <img alt="movies card" src={CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
