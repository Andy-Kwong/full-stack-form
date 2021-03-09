FROM node:15-alpine
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run build-run