# Use the latest Node.js LTS Alpine image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application - THIS IS CRUCIAL
RUN npm run build

# Expose port 3000 for the Next.js app
EXPOSE 3000 

# Start the application
CMD ["npm", "start"]