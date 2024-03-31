# <span style="color:#008B8B;">Real-Estate Application </span>

### <span style="color:#008B8B;">This repository contains the source code for a real-estate application with chat features built using Node.js, Express.js, React.js, MongoDB, Socket.io, and Prisma.</span>

## <span style="color:#008B8B;">Table of Contents</span>

- Features
- Installation
- Usage
- Endpoints
- Technologies Used
- Contributing
- Acknowledgments

## <span style="color:#008B8B;">Features</span>

- User Authentication: Users can sign up, log in, and log out securely.
- Real-Estate Listings: Users can view, create, update, and delete real-estate listings with details such as price, location, and property type.
- Chat Functionality: Users can communicate with each other through real-time chat functionality.
- Real-Time Updates: Users receive real-time updates on new messages and listing updates through Socket.io.
- Security: Password hashing, authentication using JWT tokens.

## <span style="color:#008B8B;">Installation</span>

To run the Supermarket API locally, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/vr70147/Real-Estate-App.git
```

2. Navigate to the project directory:

```bash
cd Real-Estate-App
```

3. Install dependencies for the backend:

```bash
cd api
npm install
```

4. Set up environment variables:
   Create a .env file in the backend directory and define the following variables:

```bash
PORT=5173
DATABASE_URL=<your-mongodb-url>
JWT_SECRET_KEY=<your-jwt-secret>
```

5. Run the backend server:

```bash
   npm dev
```

6. Open a new terminal window, navigate to the project directory, and install dependencies for the frontend:

```bash
   cd ../client
   npm install
```

7. Run the client:

```bash
   npm dev
```

8. Open your browser and navigate to http://localhost:5173 to access the application.

## <span style="color:#008B8B;">Usage</span>

Once the server is running, you can interact with the API using HTTP requests to the provided endpoints. You can use tools like Postman or curl to send requests.

## Endpoints

### <span style="color:#008B8B;">Authentication Endpoints:</span>

- POST /api/auth/register: Create a new user account.
- POST /api/auth/login: Log in an existing user.
- POST /api/auth/logout: Log out the currently logged-in user.

### <span style="color:#008B8B;">Chat Endpoints:</span>

- GET /api/chats: Get all chats.
- GET /api/chats/:id: Get a specific chat by ID.
- POST /api/chats/: Add a new chat.
- PUT /api/chats/read/:id: Mark a chat as read by its ID.

## <span style="color:#008B8B;">Chat Message Endpoint:</span>

- POST /api/chats/:chatId: Add a new message to a specific chat.

### <span style="color:#008B8B;">Post Endpoints:</span>

- GET /api/posts/: Get all posts.
- GET /api/posts/:id: Get a specific post by ID.
- POST /api/posts/: Add a new post.
- PUT /api/posts/:id: Update a post by its ID.
- DELETE /api/posts/:id: Delete a post by its ID.

### <span style="color:#008B8B;">User Endpoints:</span>

- GET /api/users/: Get all users.
- GET /api/users/profilePosts: Get posts associated with the logged-in user's profile.
- GET /api/users/notification: Get the number of notifications for the logged-in user.
- PUT /api/users/:id: Update a user by ID.
- POST /api/users/save: Save a post.
- PUT /api/posts/:id: Update a post by its ID.
- DELETE /api/users/:id: Delete a user by ID.

## <span style="color:#008B8B;">Technologies Used</span>

- <b>Node.js:</b> JavaScript runtime for building server-side applications.
- <b>Express.js:</b> Web framework for Node.js.
- <b>React.js:</b> A JavaScript library for building user interfaces, used for the frontend of the application.
- <b>MongoDB:</b> A NoSQL database used for storing application data.
- <b>jsonwebtoken:</b> Library for generating JWT tokens.
- <b>Socket.io</b> A library for real-time web applications, enabling real-time bidirectional event-based communication.
- <b>Prisma</b> A modern database toolkit used as the ORM for interfacing with the database.

## <span style="color:#008B8B;">Contributing</span>

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## <span style="color:#008B8B;">Acknowledgments</span>

- Special thanks to the developers of Node.js, Express.js, React.js, MongoDB, Socket.io, and Prisma for their amazing tools and libraries.
- Inspiration for this project came from the need for a real-time communication platform within a real-estate application.
