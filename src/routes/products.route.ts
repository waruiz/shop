import server from "../server";

export function products() {
  server.get("/products/:productId", (req, res) => {
    const productId = req.params.productId;
    res.send(`Requested product ${productId}`);
  });
}
