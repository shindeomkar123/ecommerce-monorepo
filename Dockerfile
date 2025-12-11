# Builder stage

FROM node:20-alpine3.23 AS builder

WORKDIR /app

COPY . .

RUN npm ci


RUN npm run nx build frontend --configuration=production