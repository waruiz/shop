import server from "./server";
import { health } from "./health.controller";
import { products } from "./products.controller";

health();
products();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});
