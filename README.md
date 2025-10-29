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


## 🧮 Task 2: Tally Counter API

### 🎯 Objective
Create a RESTful tally counter API with logging on all endpoints and actions using **Express** and **Winston**.

### ⚙️ Setup
1. Enter the Task 2 directory:
   ```bash
   cd T2
Install dependencies:

npm install


Start the Express server:

node src/main.js

🧠 Usage

Use your web browser or an API client such as Postman or curl to interact with the endpoints.

API Endpoints
Method	Endpoint	Description
GET	/counter-increase	Increment the counter by 1
GET	/counter-read	Retrieve the current counter value
GET	/counter-reset	Reset the counter to 0
Example Request
curl http://localhost:3000/counter-increase

🪵 Logging

All API actions and events are logged in both the terminal and log files:

logs/error.log
logs/combined.log

📁 File Descriptions
File	Description
src/logger.js	Winston logger configuration (same as Task 1)
src/counter.js	Counter business logic and logging
src/routes.js	Express routing and endpoint-level logging
src/main.js	Server setup and initialization
