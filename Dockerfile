FROM node:20-alpine

# Create app diretory
WORKDIR /app

# Install dependencies (production only)
COPY package*.json ./
RUN npm ci --only=production

# Copy app source
COPY . .

EXPOSE 3000

# Run the app
CMD ['node', 'index.js']

