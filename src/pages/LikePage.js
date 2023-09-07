import React from "react";
import Card from "../components/Card";

function LikePage() {
  const [movie, setMovie] = React.useState({});
  React.useEffect(() => {
    const likedMovie = JSON.parse(localStorage.getItem("likedmovie"));
    setMovie(likedMovie);
  }, []);
  return <main>{movie && movie.id && <Card movie={movie} />}</main>;
}

export default LikePage;
