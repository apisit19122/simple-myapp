# BASE IMAGE
FROM node:alpine
WORKDIR /usr/app

VOLUME /tmp
EXPOSE 9000
# ADD ENTRYPOINT

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "run", "start"]