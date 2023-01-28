FROM node:18

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

RUN yarn global add typesense-mongodb

ENTRYPOINT [ "./entrypoint.sh" ]