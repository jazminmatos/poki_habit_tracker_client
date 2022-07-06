# syntax=docker/dockerfile:

# specify a base image - we will be building this on top of this base image
FROM node:14.17.1

# specify a working directory (doesn't need to match the name of an existing folder)
WORKDIR /app

# copy package.json and package-lock.json for dependency install
COPY package.json package.json
COPY package-lock.json package-lock.json

# install dependencies
RUN npm i

# copy over the rest of the files (copy everything over to everything)
COPY . .

# specifies which port to run on - gives container access to the port. You wouldn't specify port if it's hooked up to a deployment app like heroku
EXPOSE 3000

# run command
CMD ["npm", "start"]
