FROM node:12.16.1

WORKDIR /app


COPY package.json yarn.lock /app/

COPY package.json .

RUN npm install

COPY . /app



EXPOSE 3000

CMD ["npm"] ["start"]