import { getMovies } from "../../db";

const Movies = async () => {
  const movies = await getMovies();

  res.status(200).json(movies);
};

export default Movies;
