FROM node:12.19.0-alpine3.12

VOLUME /app
WORKDIR /app

#COPY . /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
