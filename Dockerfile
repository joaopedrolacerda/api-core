FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./
# We don't need the standalone Chromium



COPY . .

RUN npm install
EXPOSE 3000

RUN npm run build

CMD [ "node", "dist/server.js" ]