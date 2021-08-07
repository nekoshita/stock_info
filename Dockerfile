FROM node:14.16-alpine3.13 AS web-builder

WORKDIR /src

COPY ./web /src
RUN yarn install
RUN yarn build
RUN yarn export

FROM python:3.7

WORKDIR /src

COPY ./api/requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY ./api /src
COPY --from=web-builder /src/out /src/public
EXPOSE 8080