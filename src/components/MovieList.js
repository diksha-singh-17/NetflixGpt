import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-6">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
