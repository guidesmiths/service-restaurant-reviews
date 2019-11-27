CREATE TABLE restaurants.comment(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  first_name VARCHAR (20),
  middle_name VARCHAR (20),
  last_name VARCHAR (20),
  comment TEXT
);