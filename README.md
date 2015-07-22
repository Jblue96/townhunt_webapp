Booked
==============

## Front-end Dev Setup

### Run npm install
```
npm install
```

### Install and run gulp
```
gulp
```

To minify JS, please run with the additional args
```
gulp --production
```

Access to http://localhost:8080/

## Backend Dev Setup

### Create a file 'app.config.js' in app root dir
```
module.exports = {
    FB_API_KEY: "xxx",
    FB_API_SECRET: "xxx",
    FB_CALLBACK_URL: "xxx"
};
```

### Install and run iojs
```
npm start
```

Access to http://localhost:3000/
