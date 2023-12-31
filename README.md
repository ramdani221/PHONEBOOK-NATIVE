# Phonebook Native

## Introduction

This is a simple full stack React-Native application which provides a solid starting point for [ReactNative](https://reactnative.dev/), [sequelize](https://sequelize.org/), [ExpressJS](https://expressjs.com/) and [NodeJS](https://nodejs.org/en/) based applications. Client side code and the backend API is written using Express.

Phonebook Native is an mobile application made to store names and telephone number of friends, family, or other people we recognize.

## Before You Begin

Before you begin i recommend you to read about the basic building blocks that assemble this application:
* React - React's [Official Website](https://reactjs.org/) is a great starting point.
* ReactNative - Go trhough [ReactNative Official Website](https://reactnative.dev/) and follow the [Getting Started](https://reactnative.dev/docs/environment-setup) guide to setting up the development environtment
* Express - The best way to understand express is through it's [Official Website](https://expressjs.com/), which has a [Getting Started](https://expressjs.com/en/starter/installing.html) guide, as well as an [ExpressJS](https://expressjs.com/en/guide/routing.html) guide for general express topics.
* Sequelize - Get in-depth information about Sequelize on the [Official Website](https://sequelize.org/) to learn the [Core Concept](https://sequelize.org/docs/v6/category/core-concepts/) of Sequelize.
* Node.js - Start by going through [Node.js Official Website](https://nodejs.org/en/) which should get you going with the Node.js platform.

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
* POstgreSQL - [Download & Install PostgreSQL](https://www.postgresql.org/download/) and make sure the sequelize migration configuration is the same as the PostgreSQL configuration on your device

## front-end

 - ReactJS (ES6)
 - React-Native
 - redux
 - redux-thunk

*source files in `client/` folder.*
## back-end

 - NodeJS
 - ExpressJS

*source files in `server/` folder*

## Getting Started

First, open terminal to run the server.

```bash
# Clone the repository
git clone https://github.com/ramdani221/PHONEBOOK-NATIVE.git

# Go inside the directory
cd PHONEBOOK-NATIVE

# Install dependencies for server
cd server && npm install

# Start server
npm start
```

open terminal to run the Socket.IO server.

```bash
# Go inside the directory
cd PHONEBOOK-NATIVE

# Install dependencies for client
cd client && npm install

# Start client
npm start
```

This application should run on port 3001 , you can access it through browser, just go to [http://localhost:3001/](http://localhost:3001/) for Client App, and
[http://localhost:3000](http://localhost:3000) for RESTful APIs


## Preview

* Home

![Home](https://github.com/ramdani221/PHONEBOOK-NATIVE/blob/main/screenshots/photo1701620439(2).jpeg?raw=true)

* Filter

![Filter](https://github.com/ramdani221/PHONEBOOK-NATIVE/blob/main/screenshots/photo1701620439(1).jpeg?raw=true)

* Edit

![Edit](https://github.com/ramdani221/PHONEBOOK-NATIVE/blob/main/screenshots/photo1701620439(3).jpeg?raw=true)

* Add

![Add](https://github.com/ramdani221/PHONEBOOK-NATIVE/blob/main/screenshots/photo1701620439(4).jpeg?raw=true)

* Avatar

![alt text](https://github.com/ramdani221/PHONEBOOK-NATIVE/blob/main/screenshots/photo1701620439.jpeg?raw=true)

* Delete

![alt text](https://github.com/ramdani221/PHONEBOOK-NATIVE/blob/main/screenshots/photo1701623318.jpeg?raw=true)

* Demo

[![Watch the video](https://github.com/ramdani221/PHONEBOOK-NATIVE/blob/main/screenshots/Demo.png?raw=true)](https://youtu.be/pnRjPlFxgOs)
