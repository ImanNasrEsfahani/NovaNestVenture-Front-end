# Use the latest Node.js LTS Alpine image as the base image
FROM node:18-alpine


# Set the working directory
WORKDIR /app

# Install dependencies
RUN apk add --no-cache libc6-compat

# Copy package files first
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN corepack enable pnpm && pnpm install

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=development
ENV NEXT_PUBLIC_DJANGO_HOST_URL=https://back.novanestventure.com

# Expose port 3000 for the Next.js app
EXPOSE 3000 

# Set the command to start the Next.js app
CMD ["pnpm", "dev"]