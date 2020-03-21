SELECT restaurant.id, name, avgprice, distance, cuisine, img, avg (rate) AS average_rate
FROM restaurants.restaurant
FULL JOIN restaurants.review ON restaurant.id = review.restaurant_id
GROUP BY restaurant.id
ORDER BY average_rate DESC;