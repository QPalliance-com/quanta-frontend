# Etapa 1: Construcción
FROM node:20 AS builder

WORKDIR /app
COPY . .

RUN npm install -g @angular/cli@19.2.15
RUN npm install
RUN ng build --configuration=production

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copia archivos compilados a la raíz de Nginx
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Elimina la configuración por defecto de Nginx y usa la nuestra (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
