# React v.15 - Booking App

## Overview

An app to book an appointment for a pet to visit a vet, from the Lynda.com course [Building a Web Interface with React.js](https://www.lynda.com/React-js-tutorials/Building-Web-Interface-React-js/495271-2.html), but starting from the FountainJS [fountain-react](http://fountainjs.io/doc) generator.

![App Screenshot](Screenshot.jpg)

##  Usage

### Get the code

@ your-project-folder

```bash
git clone https://github.com/smerth/react-15-booking-app-fountainjs.git
```
### Install dependancies

```bash
npm install
```
### Run server

```bash
node server.js
```

### Deploy

To deploy to gh-pages uncomment base url containing the target repo. Run ```npm run build``` and ```gulp deploy```.

Also add the publicPath to the webpack output plugin @ webpack-dist-conf.js 

See: [Webpack/docs/config](https://github.com/webpack/docs/wiki/configuration)

```javascript
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    publicPath: "/REPO-NAME", 
    filename: '[name]-[hash].js'
  },
```
N.B. No trailing slash after the repo name.

Comment out the base url for local development.
