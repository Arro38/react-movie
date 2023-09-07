import React, { useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../features/movie/movieSlice";

function Card({ movie }) {
  const [like, setLike] = React.useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.value);
  // TODO : CHECK DISPATCH IN USEEFFECT
  useEffect(() => {
    if (movies && movies.length > 0 && movies.find((m) => m.id === movie.id)) {
      setLike(true);
    }
  }, [movies, movie.id]);

  const handleClick = () => {
    if (like) {
      dispatch(remove(movie));
    } else {
      dispatch(add(movie));
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
