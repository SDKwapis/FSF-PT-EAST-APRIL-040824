DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

\c company;

-- CONVERT THE FOLLOWING INTO 3RD NORMAL FORM STANDARDIZATION --
CREATE TABLE businesses (
    business_id INTEGER PRIMARY KEY,
    business_name VARCHAR(255)
);

CREATE TABLE locations (
    location_id INTEGER PRIMARY KEY,
    location_name VARCHAR(255),
    location_manager VARCHAR(255)
);

CREATE TABLE location_info (

)




DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

\c company;

-- CONVERT THE FOLLOWING INTO 3RD NORMAL FORM STANDARDIZATION --
CREATE TABLE businesses (
    business_id INTEGER PRIMARY KEY,
    business_name VARCHAR(255),
    location_id INTEGER,
    location_name VARCHAR(255),
    location_manager VARCHAR(255)
);
