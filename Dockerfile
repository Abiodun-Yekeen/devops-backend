# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/backend 

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the backend source code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]


# FROM node:21.2.0-alpine

# ENV NODE_ENV = production


# WORKDIR /usr/src/backend 

# COPY  package.json ./

# COPY  package-lock.json ./


# RUN npm install

# COPY . .


# # RUN npm run build

#  EXPOSE 8080



# CMD [ "npm", "start" ]