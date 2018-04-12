# SocketIO-example
SocketIO example for styleguide project

## Installation
Make sure you have NPM and NodeJS installed on your machine befor proceeding, for more information https://nodejs.org/download

To install all required dependencies run the following command in your project root:
```
npm install
```

To start the application simply run the following command:

```
node index
```

The application will be started on port 3000 by default, to change this change 
```
http.listen(3000, function(){
    console.log('listening on *:3000');
});
```
in index.js

Navigate to http://localhost:3000 to see the working example!

This assignment is done by following this tutorial
https://socket.io/get-started/chat/

In addition some extra features are added:
* Broadcast a message to connected users when someone connects or disconnects
* Add support for nicknames
* Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
