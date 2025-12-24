import Fastify from "fastify";
import AutoLoad from "@fastify/autoload";
import { join } from "path";

export function buildApp(isProd = false) {
  const app = Fastify({
    logger: isProd
      ? true
      : {
          transport: {
            target: "pino-pretty",
            options: {
              colorize: true,
              translateTime: "HH:MM:ss",
              ignore: "pid,hostname",
            },
          },
        },
  });

  app.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
  });

  app.register(AutoLoad, {
    dir: join(__dirname, "routes"),
  });

  return app;
}
