# http-websocket

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Libraries

Axios for HTTP requests:

```console
npm install axios --save
```

In order to create a mock API, we can use the json-server (create db.json file):

```console
sudo npm install json-server -g
# Run the database based on our db.json file
json-server db.json --watch
```

Chat with websocket (in server.js create an server and install dependency)

```console
# All commands execute inside server folder
# Socket.io . This is a client and server-side library that allows us to work with
# WebSockets quickly and easily / express is node.js framework
npm install socket.io express --save
# Check the server implementation in server.js folder. To run execute:
node server.js

# Now switch to root folder and run
# Install socket.io-client and vue-socket.io
npm install socket.io-client vue-socket.io --save
# Implementation in vue check in main.js file
# Automatic restart server on every change
sudo npm install nodemon -g
# Run to activate
nodemon server.js
```

### Description
