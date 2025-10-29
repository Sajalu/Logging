Node.js Logging Library & Tally Counter API
Overview
This repository provides solutions for two tasks:

Task 1: Implementation of a Node.js logging library using Winston.

Task 2: A RESTful tally counter API using Express and Winston for structured logging.

Table of Contents
Directory Structure

Prerequisites

Task 1 Instructions

Task 2 Instructions

Configuration

Notes

Directory Structure
text
.
├── .gitignore
├── README.md
├── T1/
│   ├── package.json
│   ├── package-lock.json
│   ├── src/
│   │   ├── logger.js
│   │   └── main.js
│   └── logs/
├── T2/
│   ├── package.json
│   ├── package-lock.json
│   ├── rest.http
│   ├── src/
│   │   ├── logger.js
│   │   ├── counter.js
│   │   ├── routes.js
│   │   └── main.js
│   └── logs/
Prerequisites
Node.js version 18 or higher

npm (Node package manager)

Git (for cloning, if needed)

Task 1 Instructions
Objective: Create and test a Winston logger in a Node.js application.

Setup
Enter the T1 directory:

bash
cd T1
Install dependencies:

bash
npm install
Run the logging script:

bash
node src/main.js
Check logs:

Live JSON logs appear in your terminal.

Persisted logs are in logs/error.log and logs/combined.log.

File Descriptions
src/logger.js: Winston logger configuration.

src/main.js: Generates sample log messages at various levels.

Task 2 Instructions
Objective: Build a simple tally counter API with logging on all endpoints and actions.

Setup
Enter the T2 directory:

bash
cd T2
Install dependencies:

bash
npm install
Start the Express server:

bash
node src/main.js
API Endpoints:
Use a web browser or API client (like Postman/curl):

Increment counter:
GET http://localhost:3000/counter-increase

Read current value:
GET http://localhost:3000/counter-read

Reset counter:
GET http://localhost:3000/counter-reset

Check logs:

Actions are logged in the terminal and in logs/error.log and logs/combined.log.

File Descriptions
src/logger.js: Winston logger, identical config to Task 1.

src/counter.js: Counter’s business logic and logging.

src/routes.js: API routing and endpoint logging.

src/main.js: App setup and server initialization.

Configuration
.gitignore: Prevents node_modules/, logs/, .env, and .DS_Store files from polluting your git history.

Log file names and structure: All logs are stored in logs/error.log (errors) and logs/combined.log (all events) for both tasks as required.

Notes
All dependencies are listed in each task’s package.json.

Log files and dependencies are not tracked by git.

Each task’s code and dependencies are independent and modular.

See rest.http in T2 for example API requests (compatible with VS Code REST Client).
