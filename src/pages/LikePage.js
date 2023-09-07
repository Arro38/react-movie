import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function LikePage() {
  const movies = useSelector((state) => state.movie.value);
  return (
    <main>
      {movies &&
        movies.map((movie, index) => {
          return <Card movie={movie} key={index} />;
        })}
    </main>
  );
}

export default LikePage;
