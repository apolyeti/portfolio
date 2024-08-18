# Stage 1: Build the frontend
FROM node:18 as frontend

WORKDIR /frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

# Stage 2: Set up the backend with frontend build
FROM node:18 as backend

WORKDIR /backend

COPY backend/package*.json ./
RUN npm install

# Copy the built frontend to the backend public directory
COPY --from=frontend /frontend/dist /backend/public/dist
COPY --from=frontend /frontend/index.html /backend/public

COPY backend/ ./

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
