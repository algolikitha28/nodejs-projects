# Student Management System using Express.js and SQLite

## Objective

Develop a web application that allows users to add student details and retrieve all student records using Express.js and SQLite.

## Technologies Used

* HTML
* JavaScript (Fetch API)
* Node.js
* Express.js
* SQLite3

## Program Logic

### Step 1: User Input

The user enters the Student Name and Register Number in the HTML form.

### Step 2: Send Data to Backend

When the Submit button is clicked, JavaScript collects the form data and sends it to the Express server using a POST request through the Fetch API.

### Step 3: Receive Data in Express

The Express backend receives the request body containing the student information.

### Step 4: Store Data in SQLite

The backend executes an SQL INSERT query to store the student details in the SQLite database (students.db).

### Step 5: Send Response

After successful insertion, the server sends the response:
"Student Added Successfully".

### Step 6: Retrieve Student Records

When the user requests to view students, the frontend sends a GET request to the Express server.

### Step 7: Query Database

The Express backend executes the SQL query:

SELECT * FROM students;

to retrieve all records from the students table.

### Step 8: Display Data

The server returns the data in JSON format, and the frontend displays the records in an HTML table.

## Data Flow

Frontend Form
↓
JavaScript Fetch API
↓
Express POST Route
↓
SQLite INSERT Query
↓
students.db
↓
Express GET Route
↓
SELECT Query
↓
JSON Response
↓
HTML Table Display

## Outcome

The application successfully performs:

1. Adding student records.
2. Storing data in SQLite database.
3. Retrieving all student records.
4. Displaying records in a tabular format.

This demonstrates the integration of Frontend, Backend, and Database components in a full-stack web application.
