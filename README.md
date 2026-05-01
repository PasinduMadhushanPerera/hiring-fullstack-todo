# Full-Stack TODO Application
This project is a full stack TODO application built to manage tasks with a React frontend, an Express backend, and MongoDB for persistence. It supports creating, editing, completing, and deleting tasks through a simple monorepo structure.

## Tech Stack
- Frontend: React.js with Vite
- Backend: Node.js and Express.js
- Database: MongoDB with Mongoose

## Project Structure
- `client/` contains the user interface and API calls.
- `server/` contains the REST API, route handlers, and database model.

## Links
- Demo Video : [https://drive.google.com/file/d/1etg__dPvaupun7z5g-cqnnUFOEectnez/view?usp=sharing]
- Code Walkthrough: [https://drive.google.com/file/d/1T7fkrA-L_GWFYH5wALeIQpzb6pm3mKA6/view?usp=sharing]

## Run Locally
Start the backend:

```bash
cd server
npm install
npm run dev
```

Start the frontend:

```bash
cd client
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend API uses `http://localhost:5000/api/todos` by default.

## API Summary
- `GET /api/todos` lists all tasks
- `POST /api/todos` creates a task
- `PUT /api/todos/:id` updates a task
- `PATCH /api/todos/:id/done` toggles task status
- `DELETE /api/todos/:id` removes a task 

