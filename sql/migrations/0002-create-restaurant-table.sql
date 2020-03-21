CREATE TABLE restaurants.restaurant(
  id SERIAL PRIMARY KEY,
  name VARCHAR (30) NOT NULL,
  address TEXT,
	avgprice FLOAT,
  distance VARCHAR (30),
  cuisine VARCHAR (30),
  img TEXT
);

CREATE INDEX IF NOT EXISTS restaurants_restaurant_id_idx ON restaurants.restaurant(id);
