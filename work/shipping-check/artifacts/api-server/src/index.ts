import app from "./app";
import { logger } from "./lib/logger";

const rawPort = process.env["PORT"] ?? "3001";

const port = Number(rawPort);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const server = app.listen(port, "127.0.0.1", () => {
  logger.info({ port }, "Server listening");
});
server.on("error", (err) => {
  logger.error({ err }, "Error listening on port");
  process.exitCode = 1;
});
