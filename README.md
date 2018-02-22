# My React Playground


## How to config babel for using decorator 

https://github.com/facebook/create-react-app/issues/167

## How to setup developement environment

https://www.ibm.com/blogs/bluemix/2017/06/react-web-express-api-development-production/
https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

```
{
  "name": "example-create-react-app-express",
  "version": "1.0.0",
  "scripts": {
    "client": "cd client && yarn start",
    "server": "nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
  },
  "dependencies": {
    "express": "^4.16.2"
  },
  "devDependencies": {
    "concurrently": "^3.5.0"
  }
}
```
