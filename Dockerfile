FROM node:21-alpine as builder
RUN mkdir /app
COPY package.json .
RUN npm install
COPY . .
RUN  npm run build

#Stage 2
FROM nginx:1.24-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]