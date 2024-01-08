


# # Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the backend source code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 8085

# Define the command to run the application
CMD ["npm", "start"]














# # Stage 1: Build the Node.js app
# FROM node:14 AS build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve the app using Nginx
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# # Optionally, copy custom Nginx configuration
# # COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]




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
