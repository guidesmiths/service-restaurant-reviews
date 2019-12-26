CREATE TABLE restaurants.restaurant(
  id SERIAL PRIMARY KEY,
  name VARCHAR (30) NOT NULL,
  address TEXT,
	rate FLOAT,
	avgprice FLOAT
);

CREATE INDEX IF NOT EXISTS restaurants_restaurant_id_idx ON restaurants.restaurant(id);
