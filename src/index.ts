import express from "express";

const server = express();
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});

server.get("/health", (req, res) => {
  const dateTimeNow = new Date().toISOString();
  res.send(`Alive on ${dateTimeNow}.`);
});

server.get("/products/:productId", (req, res) => {
  const productId = req.params.productId;
  res.send(`Requested product ${productId}`);
});
