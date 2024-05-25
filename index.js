import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import peliculas from "./routes/peliculas.js";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/peliculas", peliculas);

app.get("/", (req, res) => {
  res.send("<p>Hola mundo</p>");
});

app.listen(PORT, () => {
  console.log(`Server escuchando en ${PORT}`);
});
