FROM node:10.4.0-alpine as base

WORKDIR /opt/app
COPY yarn.lock package.json ./

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn run build

CMD ["yarn", "run", "start"]
