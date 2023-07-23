import server from "./server";
import { health } from "./routes/health.route";
import { products } from "./routes/products.route";

health();
products();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});
