FROM node:16

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package*.json ./
RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
