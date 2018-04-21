FROM node:9.2.1

WORKDIR /app

COPY package.json index.js ./
RUN npm install

#FROM gcr.io/distroless/nodejs

#COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "start"]
