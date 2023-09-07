import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentMovies } from "../features/movie/movieSlice";

function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("");
  const [movies, setMovies] = useState([]);
  let currentMovies = useSelector((state) => state.movie.currentMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    setMovies([...currentMovies]);
  }, [currentMovies]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=26a145d058cf4d1b17cbf084ddebedec&language=fr-FR&query=" +
        searchValue
    );
    const data = await request.json();
    setMovies(data.results);
    dispatch(updateCurrentMovies(data.results));
  };

  return (
    <div>
      <header>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Titre du film"
            onInput={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="sortContainer">
          <button
            onClick={() => {
              setSort("top");
            }}
          >
            <AiOutlineArrowUp /> Top
          </button>
          <button
            onClick={() => {
              setSort("flop");
            }}
          >
            <AiOutlineArrowDown />
            Flop
          </button>
        </div>
      </header>
      <main>
        {movies &&
          movies
            .sort((a, b) => {
              if (sort === "top") {
                return b.vote_average - a.vote_average;
              } else if (sort === "flop") {
                return a.vote_average - b.vote_average;
              } else {
                return 0;
              }
            })
            .map((movie, index) => {
              return <Card movie={movie} key={index} />;
            })}
      </main>
    </div>
  );
}

export default HomePage;
