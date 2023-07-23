import server from "./server";

export function health() {
  server.get("/health", (req, res) => {
    const dateTimeNow = new Date().toISOString();
    res.send(`Alive on ${dateTimeNow}.`);
  });
}
