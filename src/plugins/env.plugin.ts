import fp from "fastify-plugin";
import env from "@fastify/env";

export default fp(async (app) => {
  await app.register(env, {
    schema: {
      type: "object",
      required: ["PORT"],
      properties: {
        PORT: { type: "number", default: 3000 },
      },
    },
  });
});
