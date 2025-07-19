# 3W Backend

# Backend API with Express, MongoDB, and Socket.IO

## Overview

This project is a Node.js backend using Express, MongoDB (via Mongoose), and real-time communication with Socket.IO. It provides RESTful APIs for user and claim management, and emits real-time events for leaderboard and user updates.

## Features

- User management (create, list users)
- Claim points for users
- Real-time leaderboard updates via WebSockets
- Emits event when a new user is added

## Setup

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas or local MongoDB instance

### Installation

1. Clone the repository and navigate to the backend folder:
   ```sh
   git clone <repo-url>
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with your MongoDB URI:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   node server.js
   ```
   The server will run on `http://localhost:5000` by default.

## API Endpoints

### Users

- `GET /api/users` — List all users
- `POST /api/users` — Create a new user
  - Body: `{ "name": "username" }`
  - Emits `new_user_added` event via Socket.IO

### Claims

- `POST /api/claims` — Claim random points for a user
  - Body: `{ "userId": "<user_id>" }`
  - Emits `leaderboardUpdate` event via Socket.IO

## WebSocket Events

- `leaderboardUpdate` — Sent to all clients when leaderboard changes
- `new_user_added` — Sent to all clients when a new user is created

## Project Structure

```
backend/
├── models/
│   ├── users.js
│   └── claims.js
├── routes/
│   ├── userroute.js
│   └── claimroute.js
├── server.js
├── package.json
├── .env
└── README.md
```

## License

MIT
To install dependencies:

```bash
npm/bun install
```

To run:

```bash
npm/bun run server.js
```

This project was created using `bun init` in bun v1.2.14. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
