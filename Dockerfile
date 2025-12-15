FROM node:20-alpine3.23 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN NX_DAEMON=false npx nx build backend --configuration=production --verbose
RUN NX_DAEMON=false npx nx build frontend --configuration=production --verbose

##############################################################

# Frontend runtime

FROM node:20-alpine3.23 AS frontend
WORKDIR /app
COPY /apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/apps/frontend/browser /usr/share/nginx/html

# Backend runtime
FROM node:20-alpine3.23 AS backend
COPY --from=builder /app/dist/apps/backend ./dist

# Copy only package.json to install prod deps
COPY package.json package-lock.json ./
RUN npm install --omit=dev


EXPOSE 3333

CMD [ "node","/dist/main.js" ]