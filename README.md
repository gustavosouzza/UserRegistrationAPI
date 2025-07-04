# User data registration API

API for registering and querying user data. This project offers endpoints to register users and query information such as Name, Email, Status and ID.

The Front-end consumes this API to display user data, providing an interactive interface for registration.

###  Getting started


Clone repository
```
git clone https://github.com/gustavosouzza/UserRegistrationAPI.git
```

Run Front-end:

```
cd frontend
npm install
```
To start the development server, run the command:
```
npm run dev
```
Run Back-end:

```
cd backend
npm install
```
To start the development server, run the command:
```
npm run dev
```
The server will be running at the URL http://localhost:3333.


##  Architecture overview

### 1. Back-end
The backend is responsible for the persistence of user data. It provides endpoints to create, query, and update data.

Below we have examples of how the backend can be implemented with Node.js and MongoDB.

###  2. Front-end
The Front-end is developed using React and is responsible for the user interface. React consumes the backend API to display user data and interact with it (add, edit, delete).

## Technologies and Tools Used
This project was developed using the following technologies:

Node.js - Typescript runtime environment.

TypeScript - JavaScript superset to add static typing.

MongoDB - NoSQL database for storing user data.

React - Framework used to build the Front-end
