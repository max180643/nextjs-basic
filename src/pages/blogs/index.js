// Static Generation without data
import { createDB } from "../../db";

const Blogs = ({ movies }) => {
  console.log(movies);

  return (
    <div style={{ width: "60%", margin: "0" }}>
      <h2>Blogs Page</h2>

      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <span>
                {movie.writer} / {movie.publish_date}
              </span>
              <p>{movie.excerpt}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const pool = createDB();

  const res = await pool.query(
    "SELECT id, title, excerpt, detail, writer, TO_CHAR(publish_date, 'MON-DD-YYYY HH12:MIPM') publish_date FROM movies"
  );

  return {
    props: { movies: res.rows },
  };
};

export default Blogs;
