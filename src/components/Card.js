import React, { useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Card({ movie }) {
  const [like, setLike] = React.useState(false);

  useEffect(() => {
    const likedMovie = JSON.parse(localStorage.getItem("likedmovie"));
    if (likedMovie && likedMovie.id.toString() === movie.id.toString()) {
      setLike(true);
    }
  }, []);
  const handleClick = () => {
    if (like) {
      localStorage.removeItem("likedmovie");
    } else {
      localStorage.setItem("likedmovie", JSON.stringify(movie));
    }
    setLike(!like);
  };
  return (
    <div className="card">
      {
        <img
          src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path}
          alt={"Affiche du film " + movie.title}
        />
      }
      <p className="title">{movie.title}</p>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
      <p className="overview">{movie.overview}</p>
      <span onClick={handleClick} className="heartIconCard">
        {like ? (
          <AiFillHeart size={"30px"} />
        ) : (
          <AiOutlineHeart size={"30px"} />
        )}
      </span>
    </div>
  );
}

export default Card;
