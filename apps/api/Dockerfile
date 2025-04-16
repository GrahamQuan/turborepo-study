FROM node:20-alpine AS base

# stage 1: pruner
FROM base AS pruner
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
RUN corepack enable
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=api --docker

# stage 2: installer
FROM base AS installer
WORKDIR /app
COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/turbo.json ./turbo.json
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# stage 3: builder
FROM base AS builder
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=pruner /app/out/full .
RUN npm install -g pnpm
RUN pnpm run build

# stage 4: runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/ .
COPY --from=builder /app/apps/api/src/data ./apps/api/dist/data
USER node
CMD ["node", "apps/api/dist/index.js"]