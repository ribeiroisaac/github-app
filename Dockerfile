FROM nginx:alpine
WORKDIR /src
COPY src ./static
COPY ./nginx/my.conf /etc/nginx/conf.d/mysite.conf
RUN rm /etc/nginx/conf.d/default.conf