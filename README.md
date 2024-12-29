# SkillSwap

SkillSwap is a MERN stack web platform designed to facilitate collaborative learning and skill development through peer-to-peer guidance. The platform emphasizes reciprocal knowledge exchange, industrial-grade security features, and user-friendly interfaces to create a dynamic learning environment.

## Motivation

In today's fast-paced world, the acquisition of new skills is essential for personal and professional growth. However, traditional learning methods often lack interaction and dynamism. SkillSwap was created to address this gap by providing a platform where users can learn from each other's experiences in a collaborative and supportive community.

## Features

- `Peers' Connection`:  chat interface enable direct communication after connecting request and acceptance and hands-on guidance.
- `Industrial Security Features`: Utilizes Google OAuth 2.0 authentication and JSON Web Tokens (JWT) verification for database security.
- `Rating and Feedback System`: Users can rate and give feedback on guidance sessions, enhancing credibility and accountability.
- `Responsive Layout`: Ensures optimal usability across various devices for an enhanced learning experience.

## Technologies Used

- `Frontend`: React.js, React Router, Context API, React-Bootstrap, Axios, React-Toastify, Socket.io-client.
- `Backend`: Node.js, Express.js, MongoDB (MongoDB Atlas), Mongoose, Socket.io, JSON Web Token (JWT), Passport.js.
- `Deployment`: Docker and Docker Compose
- `Tools`: Google Cloud Console (OAuth), MongoDB Compass, Postman, Docker, Docker Compose, VSCode, Git, GitHub.

## Screenshots

See the screenshots of the project in the screenshots folder.

## Installation

To run SkillSwap locally, follow these steps:

### Prerequisites

1. For Google OAuth, know how to obtain the Google OAuth credentials and configure the redirect and allowed origins routes in the Google Cloud Console.
2. Know how to obtain the connection link of the MongoDB Atlas database.
3. For Nodemailer, you should know how to obtain the app password.
4. Familiarity with working on Node.js and React projects is required.

### Clone the Repo

```bash
git clone https://github.com/HarshSharma20503/SkillSwap
cd SkillSwap
```

### Frontend Setup

```bash
cd Frontend; npm install
```

Create .env file in the frontend and write the following:

```env
VITE_LOCALHOST = http://localhost:8000
VITE_SERVER_URL = <your deployment link>
```

Run frontend

```bash
npm run dev
```

The frontend will be running on `http://localhost:5173`

### Backend Setup

```bash
cd ../Backend; npm install
```

Create .env file in the frontend and write the following:

```env
PORT = 8000
CORS_ORIGIN = *
MONGODB_URI = mongodb+srv://<your-username>:<your-password>@cluster0.<your-project>.mongodb.net

CLOUDINARY_CLOUD_NAME = <your-cloudinary-cloud-name>
CLOUDINARY_API_KEY = <your-cloudinary-api-key>
CLOUDINARY_API_SECRET = <your-cloudinary-api-key>

GOOGLE_CLIENT_ID = <your-google-client-id> 
GOOGLE_CLIENT_SECRET = <your-google-client-secret>
GOOGLE_CALLBACK_URL=http://localhost:8000/auth/google/callback

JWT_SECRET = <your-jwt-secret>

EMAIL_ID = <your-email-id>
APP_PASSWORD = <your-app-password>
```

Run backend

```bash
npm run dev
```

The frontend will be running on `http://localhost:8000`

### Install and Setup through Docker

Create a docker-compose.yml file in SkillSwap folder. Write the following in it.

```yml
version: '3'

services:
  backend:
    build:
      context: .
      dockerfile: Dockerfile.backend
      args:
        PORT: 8000
        CORS_ORIGIN: "*"
        MONGODB_URI: "mongodb+srv://<your-username>:<your-password>@cluster0.<your-project>.mongodb.net"
        CLOUDINARY_CLOUD_NAME: "<your-cloudinary-cloud-name>"
        CLOUDINARY_API_KEY: "<your-cloudinary-api-key>"
        CLOUDINARY_API_SECRET: "<your-cloudinary-api-key>"
        GOOGLE_CLIENT_ID: "<your-google-client-id>"
        GOOGLE_CLIENT_SECRET: "<your-google-client-secret>"
        GOOGLE_CALLBACK_URL: "http://localhost:8000/auth/google/callback"
        JWT_SECRET: "<your-jwt-secret>"
    ports:
      - "8000:8000"

  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
      args:
        VITE_LOCALHOST: "http://localhost:8000"
        VITE_SERVER_URL = "<your-deployment-link>"
    ports:
      - "5173:5173"
```

Run the docker compose file by using the following command which will run both frontend and backend.

```bash
sudo docker-compose up
```

To remove the docker images use the following command

```bash
sudo docker-compose down --rmi all
```

Now you can run the website on `http://localhost:5173`
