# MEAN Stack To-Do List Application

A complete, production-ready task management application built with the MEAN stack (MongoDB, Express.js, Angular, Node.js) featuring modern UI design, comprehensive functionality, and professional development practices.

##  Features

### Core Functionality
- **Complete Task Management**: Create, read, update, and delete tasks
- **Advanced Filtering**: Filter by status, priority, assignee, and search text
- **Smart Sorting**: Sort by date, priority, title, and custom fields
- **Pagination**: Efficient data loading with customizable page sizes
- **Comments System**: Collaborative task discussions
- **Dashboard Analytics**: Task statistics and productivity insights

### Technical Features
- **Responsive Design**: Works seamlessly across all devices
- **Real-time Updates**: Live data synchronization
- **Form Validation**: Comprehensive input validation
- **Error Handling**: Graceful error management
- **Loading States**: User-friendly loading indicators
- **Professional UI**: Salesforce Lightning Design System integration
##  Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Backend API](#backend-api)
- [Frontend Application](#frontend-application)
- [Testing](#testing)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

##  Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB 4.4+ (local or Atlas)
- Angular CLI 17+

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your MongoDB connection and other settings

# Start MongoDB (if using local installation)
mongod

# Run the backend server
npm run dev
```

The backend API will be available at `http://localhost:3000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory (open new terminal)
cd frontend

# Install dependencies
npm install

# Start the development server
ng serve
```

The frontend application will be available at `http://localhost:4200`

### 3. Verify Installation

1. Backend: Visit `http://localhost:3000/health`
2. Frontend: Open `http://localhost:4200` in your browser
3. Create your first task and explore the features!

##  Project Structure

```
ng-training-to-do-list/
├── backend/                    # Node.js/Express API
│   ├── app.js                 # Main application file
│   ├── models/                # MongoDB/Mongoose models
│   ├── routes/                # API route handlers
│   ├── middleware/            # Custom middleware
│   ├── test/                  # API tests (Mocha/Chai)
│   ├── package.json           # Backend dependencies
│   └── README.md              # Backend documentation
├── frontend/                   # Angular Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/    # UI Components
│   │   │   ├── services/      # Business logic services
│   │   │   ├── models/        # TypeScript interfaces
│   │   │   └── ...
│   │   ├── environments/      # Environment configs
│   │   └── styles.css         # Global styles
│   ├── angular.json           # Angular configuration
│   ├── package.json           # Frontend dependencies
│   └── README.md              # Frontend documentation
├── postman/                    # API testing collection
│   └── MEAN-Todo-API.json     # Postman collection
├── docs/                       # Additional documentation
└── README.md                   # Main project documentation
```

##  Backend API

### Technology Stack
- **Node.js & Express.js**: Server runtime and web framework
- **MongoDB & Mongoose**: Database and ODM
- **Express Validator**: Input validation
- **Mocha & Chai**: Testing framework
- **Helmet & CORS**: Security middleware

### Key Features
- RESTful API design
- Comprehensive input validation
- Error handling with meaningful messages
- Pagination and filtering
- Database indexing for performance
- Comprehensive test coverage

### API Endpoints
- `GET /api/tasks` - Get tasks with filtering/pagination
- `POST /api/task` - Create new task
- `GET /api/task/:id` - Get task by ID
- `PUT /api/task/:id` - Update task
- `DELETE /api/task/:id` - Delete task
- `POST /api/task/:id/comment` - Add comment
- `GET /api/tasks/stats` - Get task statistics

See [Backend README](./backend/README.md) for detailed documentation.

##  Frontend Application

### Technology Stack
- **Angular 17+**: Modern web framework
- **TypeScript**: Type-safe development
- **Salesforce Lightning Design System**: Professional UI components
- **RxJS**: Reactive programming
- **Angular Reactive Forms**: Advanced form handling

### Key Components
- **Dashboard**: Overview with statistics and quick actions
- **Task List**: Filterable and sortable task display
- **Task Form**: Create and edit tasks with validation
- **Task Detail**: Comprehensive task view with comments
- **Navigation**: Responsive header and routing

### Features
- Responsive design for all screen sizes
- Real-time form validation
- Loading states and error handling
- Professional UI with SLDS components
- Accessibility compliance
- Progressive web app ready

See [Frontend README](./frontend/README.md) for detailed documentation.

##  Testing

### Backend Testing
```bash
cd backend

# Run all tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Frontend Testing
```bash
cd frontend

# Run unit tests
ng test

# Run tests with coverage
ng test --code-coverage

# Run end-to-end tests
ng e2e
```

##  Deployment

### Backend Deployment
1. Set production environment variables
2. Configure production MongoDB connection
3. Deploy to your preferred platform (Heroku, AWS, etc.)
4. Set up process management (PM2)

### Frontend Deployment
1. Build for production: `ng build --configuration production`
2. Serve the `dist/` folder using a web server
3. Configure environment for production API URL

### Environment Variables
Create appropriate `.env` files for different environments:

```env
# Backend .env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
FRONTEND_URL=https://your-frontend-domain.com
```

##  API Documentation

### Postman Collection
Import the Postman collection from `postman/MEAN-Todo-API.json` for complete API testing and documentation.

### API Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful",
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalTasks": 47,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### Error Response Format
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages: `git commit -am 'Add feature'`
5. Push to your branch: `git push origin feature-name`
6. Submit a pull request

### Development Guidelines
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure responsive design for UI changes
- Use TypeScript for type safety

##  Acknowledgments

- [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/) for the beautiful UI components
- [Angular Team](https://angular.io/) for the powerful framework
- [MongoDB](https://www.mongodb.com/) for the flexible database solution
- [Express.js](https://expressjs.com/) for the minimal web framework

---

**Build using the MEAN stack for modern web development**

##  Screenshots

### Dashboard
![Dashboard Overview](docs/screenshots/dashboard.png)

### Task List
![Task Management](docs/screenshots/task-list.png)

### Task Details
![Task Details](docs/screenshots/task-detail.png)

### Mobile Responsive
![Mobile View](docs/screenshots/mobile-view.png)

---

**Ready for deployment and further development!**
