-- Create the thinq database if it doesn't exist
CREATE DATABASE IF NOT EXISTS thinq;

-- Use the thinq database
USE thinq;

-- Create the FORM_TABLE
CREATE TABLE IF NOT EXISTS FORM_TABLE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    inquiry_number VARCHAR(50) NOT NULL UNIQUE,
    concern VARCHAR(255) NOT NULL,
    subconcern VARCHAR(255) NOT NULL,
    status ENUM('NEW', 'OPEN', 'CLOSED') NOT NULL,
    date_submitted DATE NOT NULL,
    satisfaction_answer INT CHECK(satisfaction_answer BETWEEN 1 AND 5) NULL
);

-- Insert all tickets (New, Open, Closed) for Weekly, Monthly, and Annual Reports in a single query
INSERT INTO FORM_TABLE (full_name, email, inquiry_number, concern, subconcern, status, date_submitted, satisfaction_answer)
VALUES
-- Annual Examples 
('Bruce Wayne', 'bruce@wayne.com', 'INQ-20230101-001', 'Account', 'Password Reset', 'CLOSED', DATE_ADD(CURDATE(), INTERVAL -400 DAY), 4),
('Peter Parker', 'peter@spidey.com', 'INQ-20230101-002', 'Technical Issue', 'Software Bug', 'CLOSED', DATE_ADD(CURDATE(), INTERVAL -390 DAY), 5),

-- Monthly Examples
('Thor Odinson', 'thor@asgard.com', 'INQ-20240207-013', 'Account', 'Account Lock', 'CLOSED', DATE_ADD(CURDATE(), INTERVAL -10 DAY), 4),
('Natasha Romanoff', 'natasha@avengers.com', 'INQ-20240207-014', 'Security', 'Data Breach', 'OPEN', DATE_ADD(CURDATE(), INTERVAL -4 DAY), 2),
('James Bond', 'james@mi6.com', 'INQ-20240207-015', 'Technical Issue', 'Software Bug', 'NEW', DATE_ADD(CURDATE(), INTERVAL -2 DAY), NULL),

-- Weekly Examples
('Steve Rogers', 'steve@shield.com', 'INQ-20240207-016', 'Security', 'Account Lock', 'NEW', DATE_ADD(CURDATE(), INTERVAL -3 DAY), NULL),
('Peter Parker', 'peter@spidey.com', 'INQ-20240207-017', 'Technical Issue', 'System Crash', 'OPEN', DATE_ADD(CURDATE(), INTERVAL -1 DAY), NULL),
('Tony Stark', 'tony@stark.com', 'INQ-20240207-018', 'Technical Issue', 'Network Issue', 'NEW', DATE_ADD(CURDATE(), INTERVAL -5 DAY), NULL),
('Natasha Romanoff', 'natasha@avengers.com', 'INQ-20240207-019', 'Technical Issue', 'Login Failure', 'OPEN', DATE_ADD(CURDATE(), INTERVAL -2 DAY), 2),
('Wanda Maximoff', 'wanda@scarletwitch.com', 'INQ-20240207-020', 'Account', 'Login Recovery', 'CLOSED', DATE_ADD(CURDATE(), INTERVAL -7 DAY), 5),
('Vision', 'vision@avengers.com', 'INQ-20240207-021', 'Technical Issue', 'Server Crash', 'CLOSED', DATE_ADD(CURDATE(), INTERVAL -6 DAY), 4);
