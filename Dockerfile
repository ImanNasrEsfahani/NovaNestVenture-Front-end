# Use the latest Node.js LTS Alpine image as the base image
FROM node:18-alpine


# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json and prisma files
RUN apk add --no-cache openssl
COPY package*.json ./
COPY prisma ./prisma

# Install dependencies
RUN pnpm install

# Copy app source code
COPY . .

# Build the app
RUN pnpm build

# Expose port 3000 for the Next.js app
EXPOSE 3000 

# Set the command to start the Next.js app
CMD ["pnpm", "dev"]