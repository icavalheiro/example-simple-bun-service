FROM oven/bun:alpine

WORKDIR /app

COPY ./package.json ./bun.lock ./

RUN bun install --fronzen-lockfile

COPY . .

EXPOSE 3000

CMD [ "bun", "run", "start" ]