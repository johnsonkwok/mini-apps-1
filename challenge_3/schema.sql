--  run command from root directory: "mysql -u root < schema.sql"

CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  address1 VARCHAR(20) NOT NULL,
  address2 VARCHAR(20) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip INT NOT NULL,
  cc_num INT NOT NULL,
  expiry_date VARCHAR(5) NOT NULL,
  cvv VARCHAR(4) NOT NULL,
  billing_zip INT NOT NULL
);

