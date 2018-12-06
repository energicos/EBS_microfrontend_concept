# This Dockerfile can be improved to use multi-stage builds

FROM node:10.4.0-alpine

WORKDIR /opt/app
COPY yarn.lock package.json ./

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn run build

CMD ["yarn", "run", "start"]
