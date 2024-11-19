# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Expose the port that the Next.js app runs on
ENV PORT 3000
EXPOSE $PORT

# Set NODE_ENV to production
ENV NODE_ENV production

# Run the Next.js app
CMD ["npm", "run", "start"]
