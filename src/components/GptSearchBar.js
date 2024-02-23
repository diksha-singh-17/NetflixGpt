import { useDispatch, useSelector } from "react-redux";

import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langPref = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // if (searchText.current.value == null) {
  //   searchText.current.value = "funny retro movies";
  // }
  const gptQuery =
    "Act as a movie recommendtaion system and suggest some movies for the query:" +
    "funny retro movies" +
    ". only give five movies, comma separated like the example given ahead. Example:DON,Fighter,Dunki,Zoo,Dhum";

  const showGPTMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT api and get movie results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      // todo -- do error handling
    }
    console.log(gptResults.choices?.[0].message?.content);
    const gptMovies = gptResults.choices?.[0].message?.content.split(",");
    const TMDBResults = gptMovies.map((movie) => showGPTMovies(movie));
    //  [Promise, Promise, Promise, Promise, Promise]
    // for each movie, I will make TMDB API call
    const searchResults = await Promise.all(TMDBResults);
    console.log(searchResults);
    dispatch(
      addGptMovieResults({ moviesName: gptMovies, movieResults: searchResults })
    );
  };

  return (
    <div className="pt-[10%]  flex justify-center">
      <form
        className="p-2 w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          defaultValue="funny retro movies"
          className="p-4 m-4 col-span-9 "
          type="text"
          placeholder={lang[langPref].gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 py-2 px-2 rounded-lg m-4 text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langPref].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
