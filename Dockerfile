FROM node:14.15.5

WORKDIR /exportLeanCanvas
COPY ./web/package*.json ./web/

RUN npm install

COPY . .