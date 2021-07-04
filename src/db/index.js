import { Pool } from "pg";

export const createDB = () => {
  return new Pool({
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  });
};

export const getMovies = async () => {
  const res = await createDB().query(
    "SELECT id, title, excerpt, detail, writer, TO_CHAR(publish_date, 'MON-DD-YYYY HH12:MIPM') publish_date FROM movies"
  );

  return res.rows;
};
