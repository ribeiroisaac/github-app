FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 9005
ENTRYPOINT [ "node" ]
CMD [ "index.js" ]

#FROM nginx:alpine
#WORKDIR /src
#COPY src ./static
#COPY etl_process ./etl_process
#COPY node_modules ./node_modules
#COPY package-lock.json .
#COPY package.json .
#COPY ./nginx/my.conf /etc/nginx/conf.d/mysite.conf
#RUN rm /etc/nginx/conf.d/default.conf