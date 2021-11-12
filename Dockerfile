# build stage
FROM harbor.onwalk.net/knative/alpine:3.14 as build-stage

WORKDIR /app
ADD repositories /etc/apk/repositories
RUN apk --update add nodejs npm
RUN npm config set registry https://registry.npm.taobao.org 

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM harbor.onwalk.net/knative/nginx:latest as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
