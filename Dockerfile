# ============================
# 1. BASE IMAGE
# ============================
FROM node:20-alpine AS base

WORKDIR /app

# ============================
# 2. DEPENDENCIES
# ============================
FROM base AS deps

COPY package.json package-lock.json ./
RUN npm install

# ============================
# 3. BUILD
# ============================
FROM base AS build

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ============================
# 4. PRODUCTION IMAGE
# ============================
FROM base AS runner

ENV NODE_ENV=production
WORKDIR /app

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
