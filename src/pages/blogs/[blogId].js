// Static Generation with data (getStaticProps, getStaticPaths)

import { useRouter } from "next/router";
import { getMovies } from "../../db";

const Blog = ({ movie }) => {
  const router = useRouter();

  return (
    <div>
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{movie.title}</h2>
          <span>
            {movie.writer} / {movie.publish_date}
          </span>
          <p>{movie.detail}</p>
        </>
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  const movies = await getMovies();

  const paths = movies.map((movie) => ({ params: { blogId: movie.id } }));

  return {
    // https://nextjs.org/docs/basic-features/data-fetching
    // paths ระบุหน้าที่จะให้ทำการ build (Generate) ไว้ก่อน
    paths: paths.slice(0, 5),
    fallback: true,
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
