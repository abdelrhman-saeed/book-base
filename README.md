# Book Review API

A simple Node.js + Express.js RESTful API for managing users, books, and reviews.
Includes user authentication, CRUD operations, and average rating calculations.

---

## Setup Instructions

### Prerequisites

* Node.js
* NPM
* Docker
* MongoDB (via Docker container)

---

### 1. Clone the Repository

```bash
git clone https://github.com/abdelrhman-saeed/book-base.git
cd book-base
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Create `.env` File

Create a `.env` file in the root directory with the following content:

```env
HOST=127.0.0.1
PORT=8000

# MongoDB
MONGO_URI=mongodb://localhost:27017/books

# JWT
JWT_SECRET=secret
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/signup      // Register new user
POST /api/auth/signin      // Login and get token
```

---

### Users CRUD

```http
GET     /api/users
GET     /api/users/:id
POST    /api/users
PUT     /api/users/:id
DELETE  /api/users/:id
```

---

### Books CRUD

```http
GET     /api/books
GET     /api/books/:id
POST    /api/books
PUT     /api/books/:id
DELETE  /api/books/:id
```

---

### Book Reviews

```http
GET  /api/book-reviews                  // Get average book ratings
PUT  /api/book-reviews/:id/update       // Update user’s rating for a book
```

---

## Postman Collection

You can test the API using the provided Postman collection:
[Download Collection](./postman_collection.json)

---

## Usage Example

Start the development server:

```bash
npm run dev
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## You're All Set!

Start your dev server and begin building with the Book Review API.

