import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "admin",
  database: "peliculas",
  port: 5432,
  host: "localhost",
});

pool.on("error", (err, client) => {
  console.error("Error al usar el cliente de postgres: ", err);
  client.release();
});

export { pool };
