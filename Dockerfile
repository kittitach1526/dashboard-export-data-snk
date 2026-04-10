# Use Node.js 20 Alpine as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve package to serve static files
RUN npm install -g serve

# Expose port 8564
EXPOSE 8564

# Start the application
CMD ["serve", "-s", "dist", "-l", "8564"]
