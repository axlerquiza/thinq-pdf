# thinq-pdf

thinq-pdf is a part of a larger project aimed at generating PDF reports for a ticketing system. This project includes functionality for database interaction and the generation of specific reports, such as annual, monthly, and weekly reports.

## Installation

To run the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/axlerquiza/thinq-pdf.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd thinq-pdf
    ```

3. **Install the required dependencies:**

    Run the following command to install the necessary Node.js packages:

    ```bash
    npm install
    ```

4. **Set up the database:**

    - Open `thinq_setup.sql` and run the SQL script to create the tables in your MySQL database.
    - Make sure to configure the database connection in `server.js` if needed.

5. **Start the server:**

    Run the following command to start the server:

    ```bash
    npm start
    ```

    This will start the server on `http://localhost:3000`.

## Directory Structure

The project is organized into the following directories:

### `/src/utils`
Contains utility scripts for database connection and other common utilities.

### `/src/reports`
Contains the report generation scripts for the various reports used by the project.

### `/views`
Contains HTML files used for rendering views and displaying information.

### `server.js`
The main entry point for running the application. This file starts the Express server and handles routing.

### `thinq_setup.sql`
SQL setup file to create the required tables and initialize the database with sample data.

## Usage

Once the server is running, you can access the application and view the generated reports. The PDF reports can be generated using the functionalities exposed by the application.
