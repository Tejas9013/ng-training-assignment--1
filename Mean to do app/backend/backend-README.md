# MEAN Stack To-Do List - Backend API

A robust REST API built with Node.js, Express, and MongoDB for managing tasks with full CRUD operations.

## Features

- **Task Management**: Create, read, update, and delete tasks
- **Advanced Filtering**: Filter by status, priority, assignee, and search text
- **Pagination**: Efficient data loading with customizable page sizes
- **Sorting**: Sort by date, priority, title, and other fields
- **Comments System**: Add comments to tasks for collaboration
- **Statistics**: Get overview and analytics of task data
- **Validation**: Comprehensive input validation with meaningful error messages
- **Error Handling**: Graceful error handling with proper HTTP status codes

## API Endpoints

### Tasks
- `GET /api/tasks` - Get all tasks with filtering and pagination
- `GET /api/task/:id` - Get single task by ID
- `POST /api/task` - Create new task
- `PUT /api/task/:id` - Update existing task
- `DELETE /api/task/:id` - Delete task
- `GET /api/tasks/stats` - Get task statistics

### Comments
- `POST /api/task/:id/comment` - Add comment to task

### Health Check
- `GET /health` - API health check endpoint

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm
- MongoDB 4.4+ (local installation or MongoDB Atlas)

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/todoapp
   FRONTEND_URL=http://localhost:4200
   ```

3. **Start MongoDB**
   - Local MongoDB: `mongod`
   - Or use MongoDB Atlas cloud connection

4. **Run the Application**
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

5. **Verify Installation**
   Visit `http://localhost:3000/health` to confirm the API is running.

## Testing

Run the comprehensive test suite:

```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage
```

## API Usage Examples

### Create a Task
```bash
curl -X POST http://localhost:3000/api/task \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "priority": "high",
    "dueDate": "2025-01-15",
    "assignedTo": "John Doe"
  }'
```

### Get Tasks with Filtering
```bash
curl "http://localhost:3000/api/tasks?status=in-progress&priority=high&page=1&limit=10"
```

### Update Task Status
```bash
curl -X PUT http://localhost:3000/api/task/[TASK_ID] \
  -H "Content-Type: application/json" \
  -d '{"status": "completed"}'
```

## Project Structure

```
backend/
├── app.js                 # Main application file
├── models/
│   └── task.js           # MongoDB/Mongoose task model
├── routes/
│   └── tasks.js          # API route handlers
├── middleware/
│   └── errorHandler.js   # Error handling middleware
├── test/
│   ├── testSetup.js      # Test configuration
│   └── tasks.test.js     # API tests
├── package.json          # Dependencies and scripts
└── .env                  # Environment variables
```

## Data Models

### Task Schema
```javascript
{
  title: String (required, 3-100 chars),
  description: String (optional, max 500 chars),
  status: String (todo|in-progress|completed),
  priority: String (low|medium|high|urgent),
  dueDate: Date (optional),
  assignedTo: String (optional, max 100 chars),
  comments: [Comment],
  tags: [String],
  completed: Boolean,
  completedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Comment Schema
```javascript
{
  text: String (required, max 500 chars),
  author: String (required, max 100 chars),
  createdAt: Date
}
```

## Development

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- Comprehensive error handling
- Input validation with express-validator

### Security Features
- CORS protection
- Helmet.js security headers
- Input sanitization
- Rate limiting ready

## Deployment

### Production Configuration
1. Set `NODE_ENV=production` in environment
2. Configure production MongoDB connection
3. Set appropriate CORS origins
4. Enable compression and security middleware

### Environment Variables
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
FRONTEND_URL=https://your-frontend-domain.com
JWT_SECRET=your-super-secret-jwt-key
```

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions:
- Create an issue in the repository
- Check the test files for usage examples
- Review the Postman collection for API documentation

---

Built with ❤️ using the MEAN stack
