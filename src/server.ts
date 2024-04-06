import fastify from "fastify";

import { notesRoutes } from "./routes/notes-routes.js";

const app = fastify();

notesRoutes(app);

app
  .listen({ port: 3333 })
  .then(() => console.log("HTTP server running on port 3333!"));
