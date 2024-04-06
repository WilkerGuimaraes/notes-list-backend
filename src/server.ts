import fastify from "fastify";
import fastifyCors from "@fastify/cors";

import { notesRoutes } from "./routes/notes-routes.js";

const app = fastify();
app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "DELETE"],
});

notesRoutes(app);

app
  .listen({ port: 3333 })
  .then(() => console.log("HTTP server running on port 3333!"));
