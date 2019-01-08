FROM node:latest

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

# Install app dependencies
COPY package.json /src/app/
RUN npm install

# Bundle app source
COPY . /src/app

# Build and optimize react app
RUN npm run build

EXPOSE 3000

# defined in package.json
CMD [ "npm", "run", "start:server" ]

# start app
CMD ["npm", "start"]

#	docker build -t www .
#	docker run -it -p 3000:3000 www

#	To run in background
#	docker run -d -p 3000:3000 www 