import { addtopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { TOP_RATED_MOVIES_API, API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // fetch TMDB API and update store
  const dispatch = useDispatch();

  const handleMovieList = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addtopRatedMovies(json.results));
    // .then((response) => response.json())
    // .then((response) => console.log(response))
    // .catch((err) => console.error(err));
  };
  useEffect(() => {
    handleMovieList();
  }, []);
};

export default useTopRatedMovies;
