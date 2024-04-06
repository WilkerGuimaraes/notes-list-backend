import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

import { prisma } from "../database/prisma-database.js";

export async function getNotes() {
  const notes = await prisma.notes.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return notes;
}

export async function createNote(request: FastifyRequest, reply: FastifyReply) {
  try {
    const createNewNote = z.object({
      content: z.string(),
    });

    const data = createNewNote.parse(request.body);

    const note = await prisma.notes.create({
      data: {
        content: data.content,
      },
    });

    return reply.status(201).send(note);
  } catch (error) {
    console.log(error);
    return reply.status(500).send("Internal Server Error");
  }
}

export async function deleteNote(request: FastifyRequest, reply: FastifyReply) {
  try {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.notes.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return reply.status(500).send("Internal Server Error");
  }
}
