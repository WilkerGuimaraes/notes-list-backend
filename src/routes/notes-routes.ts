import { FastifyInstance } from "fastify";
import {
  getNotes,
  createNote,
  deleteNote,
} from "../controllers/notes-controllers.js";

export function notesRoutes(app: FastifyInstance) {
  app.get("/notes", getNotes);
  app.post("/notes", createNote);
  app.delete("/notes/:id", deleteNote);
}
