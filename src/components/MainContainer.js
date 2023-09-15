import { useSelector } from "react-redux";
import VideoHeader from "./VideoHeader";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  return (
    <div>
      <VideoHeader />
      <VideoTitle />
    </div>
  );
};

export default MainContainer;
