import { useSelector } from "react-redux";

import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
const GptSearchBar = () => {
  const langPref = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const gptQuery =
    "Act as a movie recommendtaion system and suggest some movies for the query:" +
    searchText.current.value +
    ". only give five movies, comma separated like the example given ahead. Example:DON,Papa,Dunki,Zoo,Dhum";

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT api and get movie results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[10%]  flex justify-center">
      <form
        className="p-2 w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
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
