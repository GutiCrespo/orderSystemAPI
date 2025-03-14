# Order Management API

This API is responsible for managing orders, ensuring data storage and enforcing business rules. It is used exclusively by the frontend and serves as the backend for an Order Management System. The system follows the slogan: **"Create, Update, and Filter!"**, allowing users to create orders, track their progress, and apply filters based on status or ID.

The API was developed as part of a technical assessment and is not intended for professional or commercial use. Its main objective is to validate fullstack development skills, including REST API design, data persistence, and business rule enforcement.

---

## Running the Project  

The API is already deployed and running in the cloud, making it easy to use without any setup.  
You can access it at:

**Base URL:** [`https://order-system-api.vercel.app`](https://order-system-api.vercel.app)  

If you prefer to run the API locally, follow the steps below:

### 1. Clone the repository
```sh
git clone https://github.com/GutiCrespo/orderSystemAPI
cd orderSystemAPI
```

### 2. Install dependencies
```sh
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory based on `.env.example`.  
You must set the `DATABASE_URL` variable with a valid PostgreSQL connection string.  
If you don’t have a database, you can create one on **Neon** or run PostgreSQL locally.

### 4. Run database migrations
```sh
npx prisma migrate dev
```
This will apply the necessary migrations to set up the database schema.

### 5. Start the API
```sh
npm run dev
```
The API will be available at [`http://localhost:4444`](http://localhost:4444).

---

## ⚠️ Important: Update the Front-end API URL  

If you want to run the full application locally (**API + Front-end**), update the front-end’s environment variables to use the local API instead of the deployed one.

In the **front-end project**, change:
```ini
NEXT_PUBLIC_API_BASE_URL="https://order-system-api.vercel.app"
```
To:
```ini
NEXT_PUBLIC_API_BASE_URL="http://localhost:4444"
```
This ensures the front-end communicates with your local API instead of the cloud version.

---

## Tools Used

### Node.js
Node.js is a JavaScript runtime that allows running JavaScript on the server side. It is widely used for building scalable and efficient back-end applications. Node.js is essential for running Express.js, and it is one of the most commonly used environments for building APIs.

### Express.js
A minimal and flexible Node.js web application framework that provides a robust set of features to build APIs and web applications. It is simple to use, lightweight, and has a vast number of middleware options. I chose Express.js because it is widely used in the industry and allows for rapid API development with clean and maintainable code.

### Prisma
Prisma is an ORM (Object-Relational Mapping) tool for Node.js and TypeScript that simplifies database interactions. It has type-safe queries, automatic migrations, and an easy-to-use API. Prisma makes database management straightforward, provides TypeScript support, and integrates seamlessly with PostgreSQL.

### PostgreSQL (via Neon)
A powerful open-source relational database known for its performance, scalability, and reliability. PostgreSQL via Neon provides a free cloud-hosted database with a simple setup and scalability, making it an ideal choice for this project.

### Jest & Supertest
Jest is a JavaScript testing framework, and Supertest is a library for testing HTTP requests. Together, they ensure the API works as expected. Jest and Supertest are industry standards for testing Node.js applications, ensuring reliability and stability.

---

## Tests

The API was tested using **Jest** and **Supertest**, covering the main functionalities:

- **GET /orders**: Ensures that all orders are retrieved successfully and returned as an array.
- **POST /orders**: Verifies that a new order is created with the correct initial state (`pending`).
- **PUT /orders/:id**: Checks that an order’s state transitions correctly from `pending` → `in_progress` → `completed`.
- **GET /orders/filter**: Confirms that filtering by state returns only orders with the specified state.
- **DELETE /orders/delete-all**: Ensures that all orders are deleted successfully, and the response message is correct.

Each test verifies both the HTTP response status and the data structure to guarantee consistency. The testing process helped identify potential edge cases and maintain API reliability.

Additionally, for quick API testing, a **Bruno collection file** (`teste-routes.json`) is included in the project root. This file contains predefined API requests for both **cloud and local** environments, making it easy to test the endpoints using the **Bruno API Client**.

Before this project, my testing experience was mainly through external tools like **Bruno**. Writing automated tests in code was a new challenge, but it allowed me to ensure reliability while keeping the tests simple and efficient.

### Running the tests
```sh
npm test
```

---

## Potential Improvements

The API was designed to be simple, focusing only on essential functionalities to meet the project requirements. However, there are several improvements that could enhance the system:

### Additional Features
While the current API provides basic order management, I would have liked to implement:
- A **DELETE** endpoint for individual orders.
- **Dynamic filtering**, allowing queries for multiple states or multiple IDs at once.
  
These enhancements would provide more flexibility when managing orders.

### Testing Coverage
The existing tests ensure that the main API functionalities work as expected. However, expanding the test coverage to include **edge cases** and **error handling scenarios** could further improve reliability.

### Alternative Technologies
Initially, the project was developed in **Ruby on Rails** due to its **MVC structure, rapid CRUD development, and maintainability**. However, since I was unfamiliar with it, I decided to switch to **Node.js and Express.js** to ensure I could deliver a functional API within the available time frame.  
If you are interested, you can check out the initial Ruby on Rails implementation here:  
**[Ruby on Rails Version](https://github.com/GutiCrespo/orderSystem.git)**

---

## Front-end Repository

If you want to check out the front-end implementation of this project, visit the repository:  
**[Order System Front-end](https://github.com/GutiCrespo/orderSystemFront.git)**
