## Skywalker Portal Server
This is the backend server for the Skywalker Portal, a platform where users can submit grievances to be addressed by Alden Skywalker. The server is responsible for handling requests, storing data, managing user authentication, and sending notifications.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Code Structure](#code-structure)
- [External Libraries](#external-libraries)
- [Api Endpoints](#api-endpoints)


## Overview
The Skywalker Portal Server is a Node.js and Express-based backend that connects the frontend with a MongoDB database. It manages the core functionality of the application, including user authentication, grievance submission, and admin operations. The server also handles email notifications and manages the API endpoints consumed by the frontend.

## Features
 - **User Authentication**: Secure login system for admin using JWT (JSON Web Tokens).
 - **Grievance Management**: Users can submit grievances, and admins can view,filter,search and delete them
 - **Real-time Updates**: Admin is notified when new grievances are submitted via email.
 - **Data Persistence**: Grievances and admin-info are stored in a MongoDB database.
 - **MVC Architecture**

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/reshmaps156/skywalker-portal-backend.git
2. Install the required dependencies
   ```bash
   npm install
3. Start the application
   ```bash
   node index.js

```bash
/skywalker-portal-backend
├── /controllers                # logic and route handling
│   ├── userController.js       # Manages user operations
│   ├── adminController.js      # Handles admin-specific functionalities
├── /models                     # Mongoose schema models
│   ├── adminModel.js           # Admin model schema
│   ├── grievanceModel.js       # Grievance model schema
├── /node_modules               # Node.js modules
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── accessToken.js              # Token generation for dialogue flow
├── connection.js               # MongoDB connection setup
├── gmailAuth.js                # Email sending configuration
├── index.js                    # Entry point of the application
├── package-lock.json           # Dependency lock file
├── package.json                # Project dependencies and scripts
└── routes.js                   # API routes
```
## External Libraries
 - Express
 - Mongoose
 - Cors
 - dotenv
 - JWT
 - Nodemailer
 - google-auth-library
 - googleapis  

## API Endpoints

 - ``POST /grievances`` : Register grievances
 - ``POST /login`` : Login 
 - ``GET /admin/grievances`` :Retrieve a list of grievances
 - ``DELETE /admin/grievance/:id`` : Delete grievance
 - ``GET /token`` : token for chatbot
 