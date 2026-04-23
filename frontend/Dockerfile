FROM node:20-alpine

WORKDIR /ToDoApp

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host"]
