SELECT *
FROM restaurants.review
WHERE restaurant_id = $1::INT