# Frontend README
This folder contains the React user interface for the TODO app. It uses Vite for development and Axios for API requests.

## Setup and Installation
Requirements:

- Node.js 14 or later
- npm
- The backend running locally

Install the dependencies and start the app:

```bash
cd client
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Key Features
- Task form with validation for required title input
- Delete confirmation before removing a task
- Inline edit for task title and description
- Done and undo actions for task status
- Responsive layout for desktop and mobile screens

## Dependencies
- Axios for HTTP requests
- React for the UI
- Vite for the development server and build process

## Assumptions and Limitations
- The app is expected to run in a modern browser.
- Styling is kept simple so the focus stays on the required functionality.
- The backend API must be running before the UI can load tasks.

## Main Files
- `src/App.jsx` contains the main UI and state logic.
- `src/services/api.js` contains the API calls.
- `src/App.css` and `src/index.css` contain the styles.

## Build
```bash
npm run build
```
