FROM nginx:1.23-alpine-slim
COPY ./dist /usr/share/nginx/html/speak-text
EXPOSE 80
