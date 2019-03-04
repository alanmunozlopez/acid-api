FROM node:8
WORKDIR /api
COPY package.json /api

RUN npm install
RUN yarn install
COPY . /api
EXPOSE 5000
CMD yarn start