FROM node:14.15.5

WORKDIR /exportLeanCanvas
COPY ./web/package*.json ./
RUN ls
RUN npm install
COPY . .
