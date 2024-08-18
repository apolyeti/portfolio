# build frontend
FROM node:18 as frontend

WORKDIR /frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend ./
RUN npm run build

# build backend
FROM node:18 as backend

WORKDIR /backend

COPY backend/package*.json ./
RUN npm install

COPY backend ./

# expose port 3000
EXPOSE 3000

# start server
CMD ["npm", "start"]