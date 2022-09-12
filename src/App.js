import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "../src/components/Css/App.css";

function App() {
  const [movies, setMovie] = useState([]);
  const moviesHandler = () => {};
  fetch("https://swapi.dev/api/films/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transformedMovies = data.results.map((dataMovies) => {
        return {
          id: dataMovies.episode_id,
          title: dataMovies.title,
          openingText: dataMovies.opening_crawl,
          releaseDate: dataMovies.release_date,
        };
      });
      setMovie(transformedMovies);
    });
  return (
    <React.Fragment>
      <section>
        <button onClick={moviesHandler}>Show</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
