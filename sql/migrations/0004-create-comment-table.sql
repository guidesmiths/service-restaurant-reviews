CREATE TABLE restaurants.comment(
  id SERIAL PRIMARY KEY,
  content TEXT,
  restaurant_id INTEGER REFERENCES restaurants.restaurant(id)
);