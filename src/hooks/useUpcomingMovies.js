import { addupcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { UPCOMING_MOVIES_API, API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // fetch TMDB API and update store
  const dispatch = useDispatch();

  const handleMovieList = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addupcomingMovies(json.results));
    // .then((response) => response.json())
    // .then((response) => console.log(response))
    // .catch((err) => console.error(err));
  };
  useEffect(() => {
    handleMovieList();
  }, []);
};

export default useUpcomingMovies;
