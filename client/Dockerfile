FROM node:16-alpine3.15

WORKDIR /App

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]