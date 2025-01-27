# Use the official Node.js image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]