import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import usePopularmovies from "../hooks/usePopularmovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  useNowPlayingMovies();
  usePopularmovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptSearchgptSearch = useSelector(
    (store) => store.gpt.showGptSearch
  );
  return (
    <div>
      <Header />
      {showGptSearchgptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryConatiner />
        </>
      )}
    </div>
  );
};

export default Browse;
