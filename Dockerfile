FROM node:14

ARG MYSQL_USER
ARG MYSQL_PASS

WORKDIR .

COPY ./package.json .

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["/wait-for-mysql.sh", "node index.js"]
