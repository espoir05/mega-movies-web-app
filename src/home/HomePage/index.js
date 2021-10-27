import { Grid } from "@material-ui/core";
import BaseLayout from "../../ds/BaseLayout";
import MovieCard from "../../ds/MovieCard";
import React from "react";

import { v4 as uuid } from "uuid";

const defaultMovies = new Array(20).fill(null).map(() => ({
  id: uuid(),
  title: "titanic",
  image: "https://api.lorem.space/image/movie?w=310&h=220",
}));

export default function HomePage() {
  const [movies, setMovie] = React.useState(defaultMovies);

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item key={movie.id}>
            <MovieCard {...movie} />
          </Grid>
        ))}
      </Grid>
    </BaseLayout>
  );
}
