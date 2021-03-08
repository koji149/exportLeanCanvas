FROM node:14.15.5

WORKDIR /exportLeanCanvas
COPY ./web/package*.json ./web/
RUN cd web
RUN npm install
RUN cd ..
COPY . .