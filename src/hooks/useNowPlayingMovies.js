import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { MOVIE_API, API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // fetch TMDB API and update store
  const dispatch = useDispatch();

  const handleMovieList = async () => {
    const data = await fetch(MOVIE_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    // .then((response) => response.json())
    // .then((response) => console.log(response))
    // .catch((err) => console.error(err));
  };
  useEffect(() => {
    handleMovieList();
  }, []);
};

export default useNowPlayingMovies;
