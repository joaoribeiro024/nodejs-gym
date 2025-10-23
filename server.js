import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor Node ativo");
});

app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`);
});
