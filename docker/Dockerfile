# Etapa 1: Compilar Angular
FROM node:20 AS builder

ARG ENV=development
ENV NODE_ENV=$ENV

WORKDIR /app

# Instala Angular CLI versión 19 globalmente
RUN npm install -g @angular/cli@19

# Copiar package.json y package-lock.json
COPY package*.json ./
RUN npm ci        # Usamos sólo npm ci, más limpio

COPY . .

# Compila Angular en modo producción
RUN npm run build -- --configuration=$ENV

# Etapa 2: Servir con Nginx
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d
COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/frontend-qp/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
