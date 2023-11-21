import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const langPref = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%]  flex justify-center">
      <form className="p-2 w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 "
          type="text"
          placeholder={lang[langPref].gptSearchPlaceholder}
        />
        <button className="bg-red-700 py-2 px-2 rounded-lg m-4 text-white col-span-3">
          {lang[langPref].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
