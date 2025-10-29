# Node.js Logging Library & Tally Counter API

## 📘 Overview
This repository provides solutions for two Node.js tasks:

- **Task 1:** Implementation of a Node.js logging library using **Winston**.
- **Task 2:** A **RESTful tally counter API** using **Express** and **Winston** for structured logging.

---

## 📂 Directory Structure
├── .gitignore
├── README.md
├── T1/
│ ├── package.json
│ ├── package-lock.json
│ ├── src/
│ │ ├── logger.js
│ │ └── main.js
│ └── logs/
├── T2/
│ ├── package.json
│ ├── package-lock.json
│ ├── rest.http
│ ├── src/
│ │ ├── logger.js
│ │ ├── counter.js
│ │ ├── routes.js
│ │ └── main.js
│ └── logs/



---

## 🧩 Prerequisites
Before running the projects, ensure you have the following installed:
- **Node.js** v18 or higher  
- **npm** (Node Package Manager)  
- **Git** (optional, for cloning the repository)

---

## 🧱 Task 1: Node.js Logging Library

### 🎯 Objective
Create and test a Winston logger in a Node.js application.

### ⚙️ Setup
1. Navigate to the Task 1 directory:
   ```bash
   cd T1
Install dependencies:

npm install


Run the logging script:

node src/main.js


Check logs:

Live JSON logs appear in your terminal.

Persisted logs are saved in:

logs/error.log
logs/combined.log

📁 File Descriptions
File	Description
src/logger.js	Winston logger configuration
src/main.js	Generates sample log messages at various levels


Task 2: Tally Counter API
🎯 Objective

Build a simple RESTful API that maintains a tally counter and logs all endpoint actions.

⚙️ Setup

Navigate to the Task 2 directory:

cd T2


Install dependencies:

npm install


Start the Express server:

node src/main.js

🔗 API Endpoints

You can use a web browser, Postman, or curl to interact with the API.

Method	Endpoint	Description
GET	/counter-increase	Increment the counter
GET	/counter-read	Read the current counter value
GET	/counter-reset	Reset the counter to zero

Example:

GET http://localhost:3000/counter-increase

🪵 Logging

All API actions are logged both in the terminal and in:

logs/error.log
logs/combined.log

📁 File Descriptions
File	Description
src/logger.js	Winston logger (same configuration as Task 1)
src/counter.js	Counter’s business logic and logging
src/routes.js	API routing and endpoint logging
src/main.js	App setup and server initialization
⚙️ Configuration

.gitignore prevents unnecessary files from being tracked:

Log files:

logs/error.log → Error logs

logs/combined.log → All logs (info, warnings, errors, etc.)
