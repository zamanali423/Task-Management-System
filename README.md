# Task-Management-System
This Task Management System allows users to manage tasks efficiently, including features like sorting, creating, updating, and deleting tasks.
## Table of Contents
  Prerequisites
  <br />
  Installation
  <br />
  Database Setup
  <br />
  Running the Application
  <br />
  API Endpoints
  <br />
  Client Application
  <br />
  Troubleshooting

## Prerequisites
Ensure you have the following installed on your system:

  `Node.js` (v14.x or higher)
  `npm` (v6.x or higher)
  `MongoDB`

# Installation
## Backend
1. Clone the repository:
   ```
   
   git clone https://github.com/zamanali423/Task-Management-System
   cd task-management-system
   
   ```
3. Navigate to the backend directory and install dependencies:
   ```
   
   cd backend
   npm install
   
   ```

## Frontend
 1. Navigate to the frontend directory and install dependencies:
    ```
    
    cd ../frontend
    npm install
    
    ```

## Database Setup
 1. Ensure MongoDB is installed and running on your local machine.
 2.Create a MongoDB database for the application (you can use a MongoDB GUI like MongoDB Compass or connect via the MongoDB shell):
       ```
       
       mongo
       use taskManagementDB
       
       ```
 3.Update the MongoDB connection string in the backend configuration:
      ```
      
      // backend/config/db.js
      const mongoose = require('mongoose');
      const connectDB = async () => {
      try {
           await mongoose.connect('mongodb://localhost:27017/taskManagementDB', {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           });
           console.log('MongoDB Connected...');
           } catch (err) {
           console.error(err.message);
           process.exit(1);
         }
        };
        module.exports = connectDB;

     ```

# Running the Application
# Backend
1.Start the backend server:
      ```

     cd backend
     npm start

      ```
  The backend server will run on `http://localhost:3001`.

## Frontend
 1.Start the frontend application:
       ```

       cd ../frontend
       npm start

       ```
  The frontend application will run on `http://localhost:3000`.  


## API Endpoints
## Task Routes
  `GET /tasks/:email` - Get all tasks for a user
  `GET /tasks/sortTask/:email?sort=ascending|descending` - Get sorted tasks for a user
  `DELETE /tasks/deleteTask/:id` - Delete a task by ID


## Client Application
### React Components
  `GetTask.js` - Main component to display and manage tasks
  `UpdateTask.js` - Component to update a task
### Context
   `userContext.js` - Context to manage user authentication and state
### Running the Client
Ensure the backend server is running before starting the frontend application. Open your browser and navigate to `http://localhost:3000` to see the Task Management System in action.

# Troubleshooting
## Common Issues
### 1.MongoDB Connection Error:

Ensure MongoDB service is running.
Check if the MongoDB connection string is correct in `backend/config/db.js`.

### 2.Port Conflicts:
Ensure no other application is running on ports `3000` or `3001`.
Change the port in the `frontend/package.json` or `backend/server.js` if necessary.

### 3.Token Expired Errors:
Ensure you are logged in and have a valid token in local storage.

## Logs
Check the logs for any error messages:

Backend logs will be printed in the terminal where you run `npm start` for the backend.
Frontend logs can be seen in the browser console (press F12 to open developer tools).





