A small participation signup form with React.js.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Deployed at https://secret-mountain-65276.herokuapp.com/

# DEPLOYMENT

## Step 0. Build Prerequisites

[Node.js version 6.0 or newer](https://nodejs.org/en/)
Verify your Node.js version with the following command in the Node.js comman prompt:  
```sh
    node -v
```
Also recommended is [Git](https://git-scm.com/downloads) for easier deployment of this app.

## Step 1. Create Production Build

[Download and unzip](https://github.com/Gizwiz/React-Participation-App) the project from the respository, or clone via git to your preferred directory

```sh
    git clone https://github.com/Gizwiz/React-Participation-App.git
```

This will result in a folder named "react-participation app" containing server.js, package.json, src, and public.

In the Node.js command prompt change directory to "react-participation app" and run the  **npm install** command. NPM is normally installed along with Node.js, but it can also be [installed sperataly](https://www.npmjs.com/get-npm) if it is missing. You can verify your NPM version with: 
```sh
    npm -v
```

Install all node dependencies with
```sh
    npm install
```

To quickly verify that things are set up corectly run the following from the app's directory in the Node.js command prompt. It will open the app on a local server in the broweser.
```sh
    npm start
```

## Step 2. Deploy Production Build

   ### Locally:
   
   Either launch with **npm start** or **node server.js**. 
   
 **npm start** will automatically open the app for you in the browser window, while **node server.js** requires you to manually browse to **localhost:9000**.
    
   ### On a web server:
   
   Follow the directions of your chosen webhost.
   
   This project is currently deployed at [Heroku](https://www.heroku.com/), and directions for Heroku deployment can be found [here](https://devcenter.heroku.com/articles/deploying-nodejs).
   
   Another alternative is [Amazon AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/), and directions for deploying Node.js applications can be found [here](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-getstarted.html)
   
   
   
