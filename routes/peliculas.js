import express from "express";
import { pool } from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const client = await pool.connect();
    const { rows } = await client.query("SELECT * FROM peliculas_general");
    client.release();
    console.log({ rows });
    return res.send(rows);
  } catch (err) {
    console.error(err);
    return res.send({ message: "Error en obtener los usuarios" });
  }
});

export default router;
