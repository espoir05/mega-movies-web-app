import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { fillMovies } from "../../features/movies/moviesSlice";

const fetchMovies = async () =>
  new Array(20).fill(null).map(() => ({
    id: uuid(),
    title: "titanic",
    image: "https://api.lorem.space/image/movie?w=310&h=220",
  }));

export default function useMovies() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const hasMovies = movies.length > 0;

  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMovies();
      dispatch(fillMovies(movies));
    };
    fetchData();
  }, [dispatch]);

  return { movies, hasMovies };
}
