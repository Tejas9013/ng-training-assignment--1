# To-Do List Application API Documentation

## Base URL
`http://localhost:3000/api`

## Endpoints

### 1. Get All Tasks
- **URL:** `/tasks`
- **Method:** GET
- **Description:** Retrieve all tasks.
- **Response:**
  - 200 OK: Returns an array of task objects.

### 2. Create a New Task
- **URL:** `/task`
- **Method:** POST
- **Description:** Create a new to-do task.
- **Request Body:**

- **Response:**
- 201 Created: Returns the created task object.
- 400 Bad Request: Missing required fields.

### 3. Update a Task
- **URL:** `/task/:id`
- **Method:** PUT
- **Description:** Update an existing task by ID.
- **Request Params:** `id` (Task ObjectId)
- **Request Body:** (Any updatable fields)
- **Response:**
- 200 OK: Returns updated task object.
- 404 Not Found: Task not found.

### 4. Delete a Task
- **URL:** `/task/:id`
- **Method:** DELETE
- **Description:** Delete a task by ID.
- **Request Params:** `id` (Task ObjectId)
- **Response:**
- 200 OK: Task deleted message.
- 404 Not Found: Task not found.

## Error Responses
- 400: Bad request, missing or invalid data.
- 404: Not found, invalid ID.
- 500: Internal server error.

## Data Model
undefined
