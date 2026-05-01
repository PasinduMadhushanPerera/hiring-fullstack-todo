# Server README
This folder contains the Express backend for the TODO app. It handles the API, connects to MongoDB through Mongoose, and stores task data.

## Setup and Installation
Requirements:

- Node.js 14 or later
- npm
- MongoDB(local or Atlas)

Install the dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the server folder:

```env
MONGODB_URI=mongodb://localhost:27017/todo-app
PORT=5000
```

Start the server:

```bash
npm run dev
```

You can also use `npm start` if you want to run it without nodemon.

## MongoDB Connection Notes
- A local MongoDB instance was used during development.
- You can switch to MongoDB Atlas by updating `MONGODB_URI` in `.env`.

## API Documentation
Base URL: `http://localhost:5000/api/todos`

- `GET /` gets all tasks
- `POST /` creates a task
- `PUT /:id` updates the title and description
- `PATCH /:id/done` toggles the done state
- `DELETE /:id` removes a task

## Assumptions and Limitations
- No authentication was implemented as per the current scope.
- The API is designed for a single user workflow and does not include pagination or search.

## Main Files
- `index.js` starts the server and connects to MongoDB.
- `models/Todo.js` defines the data schema.
- `routes/todoRoutes.js` contains the API handlers.
