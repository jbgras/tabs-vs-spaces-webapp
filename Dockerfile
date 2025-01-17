# build
FROM mcr.microsoft.com/mirror/docker/library/node:18-alpine AS build
WORKDIR /app
COPY src/ ./src
COPY public ./public
COPY ./index.html .
COPY ./package.json .
COPY ./vite.config.js .
COPY ./nginx/default.conf ./nginx/default.conf
RUN CI=true npm i
RUN npm run build

# release
FROM mcr.microsoft.com/mirror/docker/library/nginx:1.21-alpine as release
WORKDIR /app
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT exec nginx -g 'daemon off;'