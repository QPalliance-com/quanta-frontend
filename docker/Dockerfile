# Etapa 1: Build Angular
FROM node:20 AS builder

ARG ENV=production
ENV NODE_ENV=$ENV

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm ci
RUN npm run build -- --configuration=$ENV

# Etapa 2: Servir con Nginx
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d
COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/quanta-frontend /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
