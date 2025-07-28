# Etapa 1: Compilar Angular
FROM node:20 AS builder

ARG ENV=production
ENV NODE_ENV=$ENV

WORKDIR /app

RUN npm install -g @angular/cli@19

COPY package*.json ./
RUN npm ci        # Usamos sólo npm ci, más limpio

COPY . .

RUN ng version

RUN npm run build -- --configuration=$ENV
# o: RUN npx ng build --configuration=$ENV

# Etapa 2: Servir con Nginx
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d
COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/quanta-frontend /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]