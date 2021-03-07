FROM node:14.15.5

WORKDIR /exportLeanCanvas
RUN npm install
COPY . .
