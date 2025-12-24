
# Fastify + TypeScript Template

Minimal Fastify template using TypeScript and sensible defaults for small services.

Get started

1. Scaffold the template with `degit`:

```bash
npx degit SidiqovAbbos/fastify-template my-api
cd my-api
```

2. Install dependencies (use your package manager of choice):

```bash
pnpm install    # pnpm
yarn install    # yarn
npm install     # npm
```

3. Run in development (hot-reload):

```bash
pnpm run dev
# or
yarn dev
# or
npm run dev
```

4. Build and run:

```bash
pnpm run build
pnpm start
```

Notes

- Use whichever package manager you prefer and commit its lockfile (`pnpm-lock.yaml`, `package-lock.json`, or `yarn.lock`).
- Store environment variables in a `.env` file and do not commit secrets.

Project layout

- `src/` — application source (`app.ts`, `server.ts`, routes and plugins)