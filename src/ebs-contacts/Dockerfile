# This Dockerfile can be improved to use multi-stage builds

FROM node:10.4.0-alpine

WORKDIR /opt/app
COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]
