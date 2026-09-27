FROM node:20-alpine AS base
RUN apk add --no-cache openssl libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
ENV NODE_ENV=production
CMD ["sh", "-c", "npx prisma db push --accept-data-loss && npm start"]
