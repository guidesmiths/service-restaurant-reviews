CREATE TABLE restaurants.review(
  id SERIAL PRIMARY KEY,
  content TEXT,
  restaurant_id INTEGER REFERENCES restaurants.restaurant(id),
  rate FLOAT,
  cuisinerate FLOAT,
  pricerate FLOAT,
  settingrate FLOAT,
  date date,
  authorname TEXT,
  authorimg TEXT
);