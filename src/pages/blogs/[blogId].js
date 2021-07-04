// Static Generation with data (getStaticProps, getStaticPaths)

import { getMovies } from "../../db";

const Blog = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <span>
        {movie.writer} / {movie.publish_date}
      </span>
      <p>{movie.detail}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const movies = await getMovies();

  const paths = movies.map((movie) => ({ params: { blogId: movie.id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const movies = await getMovies();
  const movie = movies.find((movie) => movie.id === params.blogId);

  return {
    props: { movie },
  };
};

export default Blog;
