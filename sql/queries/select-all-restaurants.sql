SELECT restaurant.id, name, avgprice, distance, cuisine, img, avg (rate) AS average_rate
FROM restaurants.restaurant
INNER JOIN restaurants.comment ON restaurant.id = comment.restaurant_id
GROUP BY restaurant.id
ORDER BY average_rate DESC;