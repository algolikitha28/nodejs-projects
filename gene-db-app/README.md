# Web Gene Manager Application

## Project Overview

The Web Gene Manager Application is a frontend-based web application developed during classroom practical sessions to understand the fundamentals of web development and project structuring using HTML, CSS, JavaScript, and Node.js concepts.

This project allows users to:

- Add gene entries
- Edit gene information
- Delete gene records
- Search genes dynamically
- Interact with a responsive dashboard interface

The application demonstrates how frontend files are organized and served in a structured web application environment.

---

# Technologies Used

- HTML5
- JavaScript
- Node.js
- npm (Node Package Manager)

---

# Project Structure


---

# Explanation of Each Folder and File

## 1. node_modules/

The `node_modules/` folder contains all the external packages and dependencies installed using npm.

Example:

```bash
npm install
```

or

```bash
npm install express
```

When these commands are executed, npm automatically downloads all required libraries into the `node_modules` folder.

---

## Why node_modules is Important

This folder contains:

- External JavaScript libraries
- Framework packages
- Utility modules
- Supporting dependencies

Without this folder, installed packages cannot work properly.

---


---

# 2. public/ Folder

The `public/` folder stores all frontend files that are directly accessible in the browser.

It usually contains:

- HTML files
- CSS files
- JavaScript files
- Images
- Icons

---

# Why index.html is Created Inside public/

The `index.html` file acts as the main entry page of the application.

When a browser opens the application, it first looks for:

```text
index.html
```

inside the public folder.

---

# Role of index.html

The `index.html` file:

- Creates the webpage structure
- Connects CSS styling
- Connects JavaScript functionality
- Displays the UI to users



# How the Web Gene Manager Works

## Step 1: User Opens Application

The browser loads:

```text
public/index.html
```

This displays:
- Dashboard
- Forms
- Search bar
- Gene cards

---





## Step 3: JavaScript Executes

The browser loads:

```text
script.js
```

This enables:
- Dynamic interactions
- Adding genes
- Editing genes
- Deleting genes
- Search functionality
- Dashboard updates

---

# Dynamic Workflow of the Application

## Add Gene

User enters:
- Gene name
- Organism
- Sequence
- Expression level

JavaScript stores this data inside arrays and dynamically creates gene cards.

---

## Edit Gene

When edit button is clicked:
- Existing data loads into the form
- User modifies details
- Updated data replaces old entry

---

## Delete Gene

When delete is clicked:
- Selected gene is removed from the array
- UI updates instantly

---

## Search Functionality

The search bar filters genes dynamically using:

```javascript
filter()
```

This allows real-time searching.

---

# Concepts Learned Through This Practical

## Frontend Concepts

- HTML structure
- Semantic tags
- Form handling
- Responsive design
- CSS Grid
- Flexbox

---

## JavaScript Concepts

- Variables
- Arrays
- Objects
- Functions
- DOM manipulation
- Event handling
- CRUD operations
- Dynamic rendering

---

## Node.js Concepts

- npm initialization
- Package management
- Dependency installation
- node_modules understanding
- Project structuring

---

# package.json

The `package.json` file stores project metadata and dependencies.

Example:

```json
{
  "name": "web-gene-manager",
  "version": "1.0.0"
}
```

It acts as the configuration file of the Node.js project.

---

# package-lock.json

This file locks exact dependency versions.

It ensures:
- consistent installations
- stable environments
- reproducible builds

---




# Features of the Application

- Dynamic gene management
- Interactive UI
- Responsive dashboard
- Search functionality
- Real-time updates
- Clean project structure

---


---

# Learning Outcome

Through this classroom practical project, we gained practical experience in:

- Frontend web development
- JavaScript programming
- Dynamic UI development
- Node.js project structure
- npm dependency management
- Git and GitHub workflows

This project provided foundational understanding for future full-stack and bioinformatics web application development.

---

